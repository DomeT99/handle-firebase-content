<script setup lang="ts">
import ModalConfirm from '@/components/generics/ModalConfirm.vue';
import { useDashboardStore } from '@/stores/dashboardStore';
import type { Project } from '@/types/projects';

const dashboardStore = useDashboardStore();

function setProjectActive() {
   dashboardStore.setCurrentProjectStatus();
}

function closeModal() {
   dashboardStore.handleModalActive({} as Project);
}
</script>
<template>
   <ModalConfirm
      :data="{
         message: dashboardStore.currentProject?.active
            ? `Stai per disattivare ${dashboardStore.currentProject?.title}, una volta disattivato sarà possibile riattivarlo in un secondo momento, vuoi procedere? `
            : `Vuoi riattivare ${dashboardStore.currentProject?.title}?`,
         title: 'Disattiva Progetto',
         loader: dashboardStore.confirmLoader,
         onConfirm: setProjectActive,
         onCancel: closeModal
      }" />
</template>
