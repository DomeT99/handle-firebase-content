<script setup lang="ts">
import Textbox from '@/components/generics/Textbox.vue';
import Button from '@/components/generics/Button.vue';
import { useDashboardStore } from '@/stores/dashboardStore';

const store = useDashboardStore();
</script>
<template>
   <v-card elevation="5" class="pa-2">
      <v-row class="mt-1 ml-1">
         <v-col cols="3">
            <Textbox
               v-model="store.filter.title"
               :data="{
                  label: 'Cerca per titolo',
                  clearable: true
               }"
               @change="(e) => store.setFilter({ title: e.target.value })"
         /></v-col>
         <v-col cols="3">
            <Textbox
               v-model="store.filter.description"
               :data="{
                  label: 'Cerca per descrizione',
                  clearable: true
               }"
               @change="(e) => store.setFilter({ description: e.target.value })"
         /></v-col>
         <v-col cols="2">
            <v-switch
               v-model="store.filter.active"
               label="Mostra non attivi"
               color="primary"
               hide-details 
               @change="(e:any) => store.setFilter({ active: e.target.checked })"></v-switch>
         </v-col>
         <v-col cols="1">
            <Button :data="{ label: 'Cerca', size: 'x-large' }" @click="store.searchOnList" />
         </v-col>
         <v-col cols="3">
            <Button :data="{ label: 'Reset', size: 'x-large' }" @click="store.resetFilter" />
         </v-col>
      </v-row>
   </v-card>
</template>
