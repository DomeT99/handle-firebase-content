<script setup lang="ts">
import type { Chip } from '@/types/components';

defineProps<{
   data: Chip;
}>();
</script>
<template>
   <v-chip :size="data.size ?? 'small'" :color="data.color" variant="flat"> {{ data.label }} </v-chip>
</template>
