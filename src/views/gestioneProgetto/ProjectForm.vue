<script setup lang="ts">
import Textbox from "@/components/generics/Textbox.vue";
import Textarea from "@/components/generics/Textarea.vue";
import Button from "@/components/generics/Button.vue";
import { useProjectsStore } from "@/stores/projectsStore";
import { ref } from "vue";

const projectsStore = useProjectsStore();

const formReset = ref();

function resetForm() {
  formReset.value.reset();
}
</script>

<template>
  <v-card elevation="5" class="pa-10 custom-pt-6">
    <v-form ref="formReset" @submit.prevent>
      <v-row justify="center">
        <v-col cols="11">
          <Textbox
            v-model="projectsStore.projectsDetails.title"
            :data="{
              rules: [(title: string) => !!title || 'Il titolo è obbligatorio'],
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
            v-model="projectsStore.projectsDetails.images as File[]"
            chips
            counter
            show-size
            variant="outlined"
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-camera"
            label="Inserisci le immagini"
            :rules="[(images: File[]) => images.length > 0 || 'Le immagini sono obbligatorie']"
            :multiple="true"
            :clearable="true"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-8">
        <v-col cols="4">
          <Button
            :data="{
              type: 'submit',
              label: 'Salva',
              size: 'x-large',
              isFullWidth: true,
              loading: projectsStore.loader,
            }"
            @click="projectsStore.saveProject"
          />
        </v-col>
        <v-col cols="4">
          <Button
            :data="{
              label: 'Reset',
              size: 'x-large',
              isFullWidth: true,
            }"
            @click="resetForm"
          />
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>
