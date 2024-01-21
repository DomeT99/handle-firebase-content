import { getAllProjects, deleteProject, setProjectStatus } from '@/firebase/services/dashboard/dashboardService';
import type { Project, Filter } from '@/types/projects';
import { isEmptyString, isUndefined } from '@/utils/utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDashboardStore = defineStore('dashboardStore', () => {
   let loader = ref<boolean>(false);
   let projectsOriginal = ref<Project[]>([]);
   let projects = ref<Project[]>([]);
   let currentProject = ref<Project>();
   let filter = ref<Filter>({
      title: '',
      description: '',
      active: false
   });
   let showModalDelete = ref<boolean>(false);
   let confirmLoader = ref<boolean>(false);
   let showModalActive = ref<boolean>(false);

   async function populateProjects() {
      loader.value = true;

      projects.value = await getAllProjects('Projects');
      projectsOriginal.value = projects.value;

      projects.value = projectsOriginal.value.filter((item) => item.active);

      loader.value = false;
   }
   function searchOnList() {
      projects.value = filter.value.active
         ? projectsOriginal.value
         : projectsOriginal.value.filter((item) => item.active);

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

      if (!isUndefined(setFilter.active)) {
         filter.value.active = setFilter.active;
         setStatusFilter();
      }
   }
   function setStatusFilter() {
      projects.value = filter.value.active
         ? projectsOriginal.value
         : projectsOriginal.value.filter((item) => item.active);
      searchOnList();
   }
   function resetFilter() {
      filter.value = {
         title: '',
         description: '',
         active: false
      };
      setStatusFilter();
   }
   function handleModalDelete(selectedProject: Project) {
      showModalDelete.value = !showModalDelete.value;
      currentProject.value = selectedProject;
   }
   async function deleteCurrentProject() {
      confirmLoader.value = true;
      await deleteProject(currentProject.value!);

      confirmLoader.value = false;
      handleModalDelete({} as Project);
      resetFilter(); 
      populateProjects();
   }
   function handleModalActive(selectedProject: Project) {
      showModalActive.value = !showModalActive.value;
      currentProject.value = selectedProject;
   }
   async function setCurrentProjectStatus() {
      confirmLoader.value = true;
      await setProjectStatus(currentProject.value!);

      confirmLoader.value = false;
      handleModalActive({} as Project);
      resetFilter(); 
      populateProjects();
   }

   return {
      populateProjects,
      searchOnList,
      setFilter,
      setStatusFilter,
      resetFilter,
      handleModalDelete,
      deleteCurrentProject,
      handleModalActive,
      setCurrentProjectStatus,
      loader,
      projectsOriginal,
      projects,
      currentProject,
      filter,
      showModalDelete,
      confirmLoader,
      showModalActive
   };
});
