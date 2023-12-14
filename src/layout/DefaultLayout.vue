<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Header from "../components/generics/Header.vue";

type DefaultLayout = {
  title: string;
  icon?: string;
  scrollable?: boolean;
};

const { scrollable, icon, title } = defineProps<DefaultLayout>();
</script>
<template>
  <Navbar />
  <v-sheet color="#f0f0f0" height="100vh">
    <v-main :scrollable="scrollable">
      <Header :icon="icon" :title="title" />
      <slot />
    </v-main>
  </v-sheet>
</template>
