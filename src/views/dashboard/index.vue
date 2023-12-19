<script setup lang="ts">
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
  <template v-if="store.projects.length === 0">
    <section class="h-100 custom-mt-8">
      <LoadingSpinner />
    </section>
  </template>

  <template v-else>
    <section class="custom-mt-3">
      <v-container>
        <DashboardList :data="store.projects" />
      </v-container>
      <v-row justify="end" class="custom-mt-8 mr-8">
        <Button
          :data="{ size: 'x-large', icon: 'mdi-plus' }"
          @click="changeRoute('nuovoprogetto')"
        />
      </v-row>
    </section>
  </template>
</template>
