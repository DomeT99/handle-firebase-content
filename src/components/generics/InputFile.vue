<script setup lang="ts">
//Sperimentale
import type { InputFile } from '@/types/components';

defineProps<{
   data: InputFile;
}>();
</script>
<template>
   <v-file-input
      chips
      counter
      show-size
      variant="outlined"
      accept="image/png, image/jpeg, image/bmp"
      prepend-icon="mdi-camera"
      :multiple="data.multiple"
      :label="data.label"
      :clearable="data.clearable"
      @change="$emit('update:modelValue', $event.target.files)"></v-file-input>
</template>
