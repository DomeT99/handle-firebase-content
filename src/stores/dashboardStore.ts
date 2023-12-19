import { getAllData } from "@/firebase/services";
import type { Project } from "@/utils/types";
import { isBlankArray } from "@/utils/utils";
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
    if (isBlankArray(projects.value)) return true;
    else return false;
  }

  return { populateProjects, projects };
});
