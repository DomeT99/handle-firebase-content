<script setup lang="ts">
type Header = {
  title: string;
  icon?: string;
};

const { title, icon } = defineProps<Header>();
</script>
<template>
  <v-toolbar style="text-align: center" color="secondary" border>
    <v-toolbar-title>
      <v-icon :icon="icon" />
      {{ title.toUpperCase() }}
    </v-toolbar-title>
  </v-toolbar>
</template>
