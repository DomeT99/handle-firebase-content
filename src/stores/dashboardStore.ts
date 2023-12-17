import { getAllData } from "@/firebase/services";
import type { Project } from "@/utils/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDashboardStore = defineStore("dashboardStore", () => {
  let projects = ref<Project[]>([]);

  async function populateProjects() {
    if (isBlankProjectsStore()) {
      projects.value = await getAllData("Projects");
    }
  }

  function isBlankProjectsStore() {
    if (projects.value.length === 0) return true;
    else return false;
  }

  return { populateProjects, projects };
});
