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
  <v-main :scrollable="scrollable">
    <Header :icon="icon" :title="title" />
    <v-sheet>
      <slot />
    </v-sheet>
  </v-main>
</template>
