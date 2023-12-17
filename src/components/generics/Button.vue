<script setup lang="ts">
type Button = {
  color?: "primary" | "secondary" | "info" | "warning" | "error" | "success";
  icon?: string;
  label?: string;
  size?: string | number;
};

const { color, icon, label, size } = defineProps<Button>();
</script>
<template>
  <template v-if="icon !== undefined">
    <v-btn :icon="icon" :size="size ?? 'large'" :color="color ?? 'primary'"
  /></template>

  <template v-else
    ><v-btn :size="size ?? 'large'" :color="color ?? 'primary'">{{
      label
    }}</v-btn>
  </template>
</template>
