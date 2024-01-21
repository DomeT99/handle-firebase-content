<script setup lang="ts">
import Chip from '@/components/generics/Chip.vue';
import { useDashboardStore } from '@/stores/dashboardStore';

const dashboardStore = useDashboardStore();
</script>

<template>
   <v-card elevation="5">
      <v-table fixed-header :hover="true" height="650">
         <thead>
            <tr>
               <th class="text-left">Titolo</th>
               <th class="text-left">Descrizione</th>
               <th class="text-left">Stato</th>
               <th class="text-center"></th>
            </tr>
         </thead>
         <tbody>
            <template v-if="dashboardStore.projects.length === 0"> Nessun progetto presente </template>
            <template v-else>
               <tr v-for="project in dashboardStore.projects">
                  <td class="w-25">{{ project.title }}</td>
                  <td class="w-25">{{ project.description }}</td>
                  <td class="w-25">
                     <Chip
                        :data="{
                           color: project.active ? 'green' : 'red',
                           label: project.active ? 'Attivo' : 'Non attivo'
                        }" />
                  </td>
                  <td class="cursor-pointer w-25 text-right">
                     <v-icon color="primary" size="x-large" icon="mdi-pencil" />
                     <v-icon color="primary" size="x-large" icon="mdi-eye" />
                     <v-icon
                        color="primary"
                        size="x-large"
                        icon="mdi-delete"
                        @click="dashboardStore.handleModalDelete(project)" />
                  </td>
               </tr>
            </template>
         </tbody>
      </v-table>
   </v-card>
</template>
