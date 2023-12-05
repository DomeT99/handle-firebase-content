<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
const { scrollable } = defineProps<{ scrollable?: boolean }>();
</script>
<template>
  <Navbar />
  <VMain :scrollable="scrollable">
    <slot />
  </VMain>
</template>
