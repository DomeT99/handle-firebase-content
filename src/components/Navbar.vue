<script setup lang="ts">
import { useNavigationStore } from "@/stores/navigationStore";

const store = useNavigationStore();
</script>
<template>
  <v-app-bar color="primary" elevation="10">
    <v-app-bar-nav-icon
      @click="store.toggleSideBar()"
      variant="text"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer
    v-model="store.isFixed"
    :rail="store.rail"
    color="primary"
    elevation="10"
    permanent
  >
    <v-list class="custom-mt-1" density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Dashboard"
        value="dashboard"
        @click="
          store.handleRoute(
            'dashboard',
            {
              header: { icon: 'mdi-view-dashboard', title: 'Dashboard' },
              scrollable: false,
            },
            true
          )
        "
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-plus"
        title="Nuovo progetto"
        value="nuovoprogetto"
        @click="
          store.handleRoute(
            'nuovoprogetto',
            {
              header: {
                icon: 'mdi-plus',
                title: 'Nuovo Progetto',
                goBack: true,
              },
              scrollable: false,
            },
            true
          )
        "
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
