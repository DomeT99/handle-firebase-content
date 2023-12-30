<script setup lang="ts">
import DashboardList from "@/views/dashboard/DashboardList.vue";
import DashboardFilter from "@/views/dashboard/DashboardFilter.vue";
import Button from "@/components/generics/Button.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useNavigationStore } from "@/stores/navigationStore";
import { onMounted } from "vue";

const dashboardStore = useDashboardStore();
const navigationStore = useNavigationStore();

onMounted(async () => await dashboardStore.populateProjects());
</script>

<template>
  <template v-if="dashboardStore.projectsOriginal.length === 0">
    <section class="h-100 custom-mt-8">
      <LoadingSpinner />
    </section>
  </template>

  <template v-else>
    <section>
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <DashboardFilter />
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <DashboardList />
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="end" class="mr-8">
        <Button
          :data="{ size: 'x-large', icon: 'mdi-plus' }"
          @click="
            navigationStore.handleRoute(
              'nuovoprogetto',
              {
                header: {
                  icon: 'mdi-plus',
                  title: 'Nuovo Progetto',
                  goBack: true,
                },
                scrollable: false,
              },
              true
            )
          "
        />
      </v-row>
    </section>
  </template>
</template>
