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
    <section class="custom-mt-3">
      <v-container>
        <DashboardFilter />
      </v-container>
      <v-container>
        <DashboardList :data="dashboardStore.projects" />
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
