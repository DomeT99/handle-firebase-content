<script setup lang="ts">
import DefaultLayout from "./layout/DefaultLayout.vue";
import { useNavigationStore } from "@/stores/navigationStore";

const store = useNavigationStore();
</script>

<template>
  <v-app>
    <DefaultLayout :data="store.currentLayout">
      <RouterView />
    </DefaultLayout>
  </v-app>
</template>
