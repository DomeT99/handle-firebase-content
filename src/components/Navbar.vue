<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { changeRoute } from "@/utils/utils";

const openMenu = ref<boolean>(false);

function toggleSideBar() {
  openMenu.value = !openMenu.value;
}

function handleRoute(route: string) {
  changeRoute(route);
  toggleSideBar();
}
</script>
<template>
  <v-app-bar color="primary" elevation="10">
    <v-app-bar-nav-icon
      @click="toggleSideBar"
      variant="text"
    ></v-app-bar-nav-icon>
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
        @click="handleRoute('dashboard')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-plus"
        title="Nuovo progetto"
        value="nuovoprogetto"
        @click="handleRoute('nuovoprogetto')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
