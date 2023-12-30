<script setup lang="ts">
import { type Button } from "@/utils/types";

defineProps<{
  data: Button;
}>();
</script>
<template>
  <template v-if="data.icon !== undefined">
    <v-btn
      :icon="data.icon"
      :size="data.size ?? 'large'"
      :color="data.color ?? 'primary'"
  /></template>

  <template v-else
    ><v-btn
      :width="data.isFullWidth ? '100%' : ''"
      :size="data.size ?? 'large'"
      :color="data.color ?? 'primary'"
      :type="data.type ?? 'button'"
      >{{ data.label }}</v-btn
    >
  </template>
</template>
