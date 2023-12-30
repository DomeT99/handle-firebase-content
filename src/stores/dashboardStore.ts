import { getAllData } from "@/firebase/services";
import type { Project, Filter } from "@/utils/types";
import { isBlankArray, isEmptyString, isUndefined } from "@/utils/utils";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDashboardStore = defineStore("dashboardStore", () => {
  let projectsOriginal = ref<Project[]>([]);
  let projects = ref<Project[]>([]);
  let filter = ref<Filter>({
    title: "",
    description: "",
  });

  async function populateProjects() {
    if (isBlankProjectsStore()) {
      projects.value = await getAllData("Projects");
      projectsOriginal.value = projects.value;
    }
  }
  function isBlankProjectsStore() {
    if (isBlankArray(projects.value)) return true;
    else return false;
  }
  function searchOnList() {
    projects.value = projects.value.filter(
      (item) =>
        item.title.toLowerCase().includes(filter.value.title!.toLowerCase()) &&
        item.description
          .toLowerCase()
          .includes(filter.value.description!.toLowerCase())
    );
  }
  function setFilter(setFilter: Filter) {
    if (!isUndefined(setFilter.title) && !isEmptyString(setFilter.title!)) {
      filter.value.title = setFilter.title;
    }

    if (
      !isUndefined(setFilter.description) &&
      !isEmptyString(setFilter.description!)
    ) {
      filter.value.description = setFilter.description;
    }
  }
  function resetFilter() {
    projects.value = projectsOriginal.value;
    filter.value = {
      title: "",
      description: "",
    };
  }

  return {
    populateProjects,
    setFilter,
    searchOnList,
    resetFilter,
    projectsOriginal,
    projects,
    filter,
  };
});
