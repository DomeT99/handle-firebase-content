<script setup lang="ts">
import DefaultLayout from './layout/DefaultLayout.vue';
import Snackbar from './components/generics/Snackbar.vue';
import { useNavigationStore } from '@/stores/navigationStore';
import { useHandleErrorStore } from '@/stores/handleErrorStore';

const navigationStore = useNavigationStore();
const errorStore = useHandleErrorStore();
</script>

<template>
   <v-app>
      <DefaultLayout :data="navigationStore.currentLayout">
         <RouterView />
         <Snackbar
            v-model="errorStore.showErrorSnackBar"
            :data="{ message: 'Si è verificato un errore', timeout: 4000, color: 'error' }" />
      </DefaultLayout>
   </v-app>
</template>
