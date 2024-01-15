<script setup lang="ts">
import ProjectForm from './ProjectForm.vue';
import Snackbar from '@/components/generics/Snackbar.vue';
import { useProjectsStore } from '@/stores/projectsStore';

const projectsStore = useProjectsStore();
</script>

<template>
   <v-container class="custom-mt-3">
      <v-row justify="center">
         <v-col cols="8">
            <ProjectForm />
         </v-col>
      </v-row>
      <Snackbar
         v-model="projectsStore.showSnackbar"
         :data="{ message: 'Progetto creato con successo', timeout: 1500 }" />
   </v-container>
</template>
