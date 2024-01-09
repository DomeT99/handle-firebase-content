<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import { type DefaultLayout } from "@/utils/types";

defineProps<{
  data: DefaultLayout;
}>();
</script>
<template>
  <Navbar />
  <v-sheet color="#f0f0f0" min-height="110vh">
    <v-main :scrollable="data.scrollable">
      <Header :data="data.header" />
      <slot />
    </v-main>
  </v-sheet>
</template>
