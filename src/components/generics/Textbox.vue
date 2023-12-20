<script setup lang="ts">
import type { Textbox } from "@/utils/types";

defineProps<{
  data: Textbox;
}>();
</script>

<template>
  <v-text-field
    variant="outlined"
    :clearable="data.clearable"
    :label="data.label"
    @input="$emit('update:modelValue', $event.target.value)"
  ></v-text-field>
</template>
