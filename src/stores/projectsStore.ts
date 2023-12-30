import type { ProjectDetails } from "@/utils/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectsStore = defineStore("projectsStore", () => {
  let projectsDetails = ref<ProjectDetails>({
    id: "",
    title: "",
    description: "",
    images: [],
    cover: [],
  });

  return { projectsDetails };
});
