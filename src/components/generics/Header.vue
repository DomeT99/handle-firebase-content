<script setup lang="ts">
import { type Header } from "@/utils/types";

defineProps<{
  data: Header;
}>();
</script>
<template>
  <v-toolbar style="text-align: center" color="secondary" border>
    <v-toolbar-title>
      <v-icon :icon="data.icon" />
      {{ data.title.toUpperCase() }}
    </v-toolbar-title>
  </v-toolbar>
</template>
