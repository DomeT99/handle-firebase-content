<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useLoginStore } from "./stores/loginStore";

const { triggerGetToken } = useLoginStore();

onBeforeMount(async () => await triggerGetToken());
</script>

<template>
  <v-app>
    <RouterView />
  </v-app>
</template>
