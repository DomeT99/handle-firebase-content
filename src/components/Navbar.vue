<script setup lang="ts">
import { ref } from "vue";

const openMenu = ref<boolean>(false);
</script>
<template>
  <v-app-bar color="primary" elevation="10">
    <v-app-bar-nav-icon
      @click="openMenu = !openMenu"
      variant="text"
    ></v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer
    color="secondary"
    elevation="10"
    v-model="openMenu"
    :temporary="true"
  >
    <v-list density="compact" nav style="margin-top: 1rem">
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="About"
        value="about"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
