<script setup lang="ts">
import { type Button } from '@/utils/types';

defineProps<{
   data: Button;
}>();
</script>

<template>
   <template v-if="data.icon !== undefined">
      <v-btn :icon="data.icon" :size="data.size ?? 'large'" :color="data.color ?? 'primary'"
   /></template>

   <template v-else
      ><v-btn
         :loading="data.loading"
         :type="data.type ?? 'button'"
         :size="data.size ?? 'large'"
         :width="data.isFullWidth ? '100%' : ''"
         :color="data.color ?? 'primary'"
         >{{ data.label }}</v-btn
      >
   </template>
</template>
