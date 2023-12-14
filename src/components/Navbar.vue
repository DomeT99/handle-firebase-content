<script setup lang="ts">
import { ref } from "vue";

const openMenu = ref<boolean>(false);

function toggleSideBar() {
  openMenu.value = !openMenu.value;
}
</script>
<template>
  <v-app-bar color="primary" elevation="10">
    <v-app-bar-nav-icon @click="toggleSideBar" variant="text"></v-app-bar-nav-icon>
  </v-app-bar>
  
  <v-navigation-drawer
    color="primary"
    elevation="10"
    v-model="openMenu"
    :temporary="true"
  >
    <v-list class="custom-mt-1" density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Dashboard"
        value="dashboard"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="About"
        value="about"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
