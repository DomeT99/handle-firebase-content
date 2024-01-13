<script setup lang="ts">
import type { Snackbar } from '@/types/components';

defineProps<{
   data: Snackbar;
}>();
</script>
<template>
   <v-snackbar multi-line :color="data.color ?? 'success'" :timeout="data.timeout ?? 3000"
      >{{ data.message }}
   </v-snackbar>
</template>
