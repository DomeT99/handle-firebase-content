<script setup lang="ts">
import type { InputFile } from "@/utils/types";

defineProps<{
  data: InputFile;
}>();
</script>
<template>
  <v-file-input
    chips
    variant="outlined"
    prepend-icon="mdi-camera"
    :multiple="data.multiple"
    :label="data.label"
    :clearable="data.clearable"
    @input="$emit('update:modelValue', $event.target.value)"
  ></v-file-input>
</template>
