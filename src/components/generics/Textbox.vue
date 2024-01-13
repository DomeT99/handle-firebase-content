<script setup lang="ts">
import type { Input } from "@/types/components";

defineProps<{
  data: Input;
}>();
</script>

<template>
  <v-text-field
    variant="outlined"
    :rules="data.rules"
    :clearable="data.clearable"
    :label="data.label"
    @input="$emit('update:modelValue', $event.target.value)"
  ></v-text-field>
</template>
@/types/types