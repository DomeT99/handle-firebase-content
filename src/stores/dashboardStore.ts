import { getAllProjects } from '@/firebase/services/projects/projectsService';
import type { Project, Filter } from '@/types/projects';
import { isEmptyString, isUndefined } from '@/utils/utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDashboardStore = defineStore('dashboardStore', () => {
   let loader = ref<boolean>(false);
   let projectsOriginal = ref<Project[]>([]);
   let projects = ref<Project[]>([]);
   let filter = ref<Filter>({
      title: '',
      description: ''
   });

   async function populateProjects() {
      loader.value = true;

      projects.value = await getAllProjects('Projects');
      projectsOriginal.value = projects.value;

      loader.value = false;
   }
   function searchOnList() {
      projects.value = projects.value.filter(
         (item) =>
            item.title.toLowerCase().includes(filter.value.title!.toLowerCase()) &&
            item.description.toLowerCase().includes(filter.value.description!.toLowerCase())
      );
   }
   function setFilter(setFilter: Filter) {
      if (!isUndefined(setFilter.title) && !isEmptyString(setFilter.title!)) {
         filter.value.title = setFilter.title;
      }

      if (!isUndefined(setFilter.description) && !isEmptyString(setFilter.description!)) {
         filter.value.description = setFilter.description;
      }
   }
   function resetFilter() {
      projects.value = projectsOriginal.value;
      filter.value = {
         title: '',
         description: ''
      };
   }

   return {
      populateProjects,
      setFilter,
      searchOnList,
      resetFilter,
      loader,
      projectsOriginal,
      projects,
      filter
   };
});
