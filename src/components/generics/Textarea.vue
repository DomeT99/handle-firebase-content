<script setup lang="ts">
import type { Input } from "@/utils/types";

defineProps<{
  data: Input;
}>();
</script>

<template>
  <v-textarea
    variant="outlined"
    :clearable="data.clearable"
    :label="data.label"
    @input="$emit('update:modelValue', $event.target.value)"
  ></v-textarea>
</template>
