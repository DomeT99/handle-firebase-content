<script setup lang="ts">
import Textbox from "@/components/generics/Textbox.vue";
import Textarea from "@/components/generics/Textarea.vue";
import InputFile from "@/components/generics/InputFile.vue";
import Button from "@/components/generics/Button.vue";
</script>

<template>
  <v-card elevation="5" class="pa-10 custom-pt-6">
    <v-form>
      <v-row justify="center">
        <v-col cols="11">
          <Textbox
            :data="{
              label: 'Titolo',
              clearable: true,
            }"
          />
        </v-col>
        <v-col cols="11">
          <Textarea
            :data="{
              label: 'Descrizione',
              clearable: true,
            }"
          />
        </v-col>
        <v-col cols="11">
          <InputFile
            :data="{
              label: 'Inserisci una cover',
              clearable: true,
              multiple: false,
            }"
          />
        </v-col>
        <v-col cols="11">
          <InputFile
            :data="{
              label: 'Inserisci le immagini',
              clearable: true,
              multiple: true,
            }"
          />
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
