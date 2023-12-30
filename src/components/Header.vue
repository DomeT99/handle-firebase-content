<script setup lang="ts">
import { type Header } from "@/utils/types";
import { useNavigationStore } from "@/stores/navigationStore";

const navigationStore = useNavigationStore();

defineProps<{
  data: Header;
}>();
</script>
<template>
  <v-toolbar style="text-align: center" color="secondary" border>
    <template v-if="data.goBack">
      <v-btn
        @click="
          navigationStore.handleRoute(
            'dashboard',
            {
              header: { icon: 'mdi-view-dashboard', title: 'Dashboard' },
              scrollable: false,
            },
            true
          )
        "
        icon
        class="hidden-xs-only"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </template>

    <v-toolbar-title>
      <v-icon :icon="data.icon" />
      {{ data.title.toUpperCase() }}
    </v-toolbar-title>
  </v-toolbar>
</template>
