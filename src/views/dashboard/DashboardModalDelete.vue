<script setup lang="ts">
import ModalConfirm from '@/components/generics/ModalConfirm.vue';
import { useDashboardStore } from '@/stores/dashboardStore';
import type { Project } from '@/types/projects';

const dashboardStore = useDashboardStore();

function deleteProject() {
   dashboardStore.deleteCurrentProject();
}

function closeModal() {
   dashboardStore.handleModalDelete({} as Project);
}
</script>
<template>
   <ModalConfirm
      :data="{
         message: 'Sei sicuro di voler eliminare questo progetto?',
         title: 'Elimina Progetto',
         onConfirm: deleteProject,
         onCancel: closeModal,
         loader: dashboardStore.confirmLoaderDelete
      }" />
</template>
