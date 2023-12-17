<script setup lang="ts">
import { type Project } from "../../utils/types";

defineProps<{
  data: Project[];
}>();
</script>

<template>
  <v-card elevation="5">
    <v-table fixed-header :hover="true" height="650">
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Title</th>
          <th class="text-center">Description</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in data">
          <td>{{ project.id }}</td>
          <td>{{ project.title }}</td>
          <td>{{ project.description }}</td>
          <td class="cursor-pointer">
            <v-icon color="primary" size="x-large" icon="mdi-magnify" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
