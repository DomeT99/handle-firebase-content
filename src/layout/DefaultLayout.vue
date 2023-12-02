<script setup lang="ts">
const { scrollable } = defineProps<{ scrollable?: boolean }>();
</script>
<template>
  <VMain :scrollable="scrollable">
    <slot />
  </VMain>
</template>
