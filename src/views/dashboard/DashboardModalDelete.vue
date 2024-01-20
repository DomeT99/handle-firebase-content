<script setup lang="ts">
import ModalConfirm from '@/components/generics/ModalConfirm.vue';
import { useDashboardStore } from '@/stores/dashboardStore';

const dashboardStore = useDashboardStore();

function test() {
   alert('as');
}

</script>
<template>
   <ModalConfirm
      :data="{
         message: 'Sei sicuro di voler eliminare questo progetto?',
         title: 'Elimina Progetto',
         onConfirm: test,
         onCancel: dashboardStore.handleModalDelete
      }" />
</template>
