<script setup lang="ts">
import Textbox from "@/components/generics/Textbox.vue";
import Textarea from "@/components/generics/Textarea.vue";
import Button from "@/components/generics/Button.vue";
import { useProjectsStore } from "@/stores/projectsStore";

const projectsStore = useProjectsStore();
</script>

<template>
  <v-card elevation="5" class="pa-10 custom-pt-6">
    <v-form>
      <v-row justify="center">
        <v-col cols="11">
          <Textbox
            v-model="projectsStore.projectsDetails.title"
            :data="{
              label: 'Titolo',
              clearable: true,
            }"
          />
        </v-col>
        <v-col cols="11">
          <Textarea
            v-model="projectsStore.projectsDetails.description"
            :data="{
              label: 'Descrizione',
              clearable: true,
            }"
          />
        </v-col>
        <v-col cols="11">
          <v-file-input
            v-model="projectsStore.projectsDetails.cover"
            chips
            counter
            show-size
            variant="outlined"
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-camera"
            label="Inserisci una cover"
            :multiple="false"
            :clearable="true"
          ></v-file-input>
        </v-col>
        <v-col cols="11">
          <v-file-input
            v-model="projectsStore.projectsDetails.images"
            chips
            counter
            show-size
            variant="outlined"
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-camera"
            label="Inserisci le immagini"
            :multiple="true"
            :clearable="true"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-8">
        <v-col cols="4">
          <Button
            :data="{
              label: 'Salva',
              size: 'x-large',
              isFullWidth: true,
            }"
          />
        </v-col>
        <v-col cols="4">
          <Button
            :data="{
              label: 'Reset',
              size: 'x-large',
              isFullWidth: true,
            }"
          />
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>
