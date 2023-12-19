<script setup lang="ts">
import DefaultLayout from "@/layout/DefaultLayout.vue";
import DashboardList from "@/views/dashboard/DashboardList.vue";
import Button from "@/components/generics/Button.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { changeRoute } from "@/utils/utils";
import { useDashboardStore } from "@/stores/dashboardStore";
import { onMounted } from "vue";

const store = useDashboardStore();

onMounted(async () => await store.populateProjects());
</script>
<template>
  <DefaultLayout icon="mdi-view-dashboard" title="Dashboard">
    <template v-if="store.projects.length === 0">
      <section class="custom-h-100 custom-mt-8">
        <LoadingSpinner />
      </section>
    </template>
    <template v-else>
      <section>
        <v-container class="custom-mt-3">
          <DashboardList :data="store.projects" />
        </v-container>
        <v-row justify="end" class="custom-mt-8 mr-8">
          <Button
            @click="changeRoute('nuovoprogetto')"
            icon="mdi-plus"
            size="x-large"
          />
        </v-row>
      </section>
    </template>
  </DefaultLayout>
</template>
