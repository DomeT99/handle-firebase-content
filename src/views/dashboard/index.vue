<script setup lang="ts">
import DefaultLayout from "@/layout/DefaultLayout.vue";
import DashboardList from "@/views/dashboard/DashboardList.vue";
import Button from "@/components/generics/Button.vue";
import { changeRoute } from "@/utils/utils";
import { useDashboardStore } from "@/stores/dashboardStore";
import { onMounted } from "vue";

const { projects, populateProjects } = useDashboardStore();

onMounted(async () => populateProjects());
</script>
<template>
  <DefaultLayout icon="mdi-view-dashboard" title="Dashboard">
    <v-container class="custom-mt-3">
      <DashboardList :data="projects" />
    </v-container>
    <v-row justify="end" class="custom-mt-8 mr-8">
      <Button @click="changeRoute('nuovoprogetto')" icon="mdi-plus" size="x-large" />
    </v-row>
  </DefaultLayout>
</template>
