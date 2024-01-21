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
      description: ''
   });
   let showModalDelete = ref<boolean>(false);
   let confirmLoader = ref<boolean>(false);
   let showModalActive = ref<boolean>(false);

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
   function handleModalDelete(selectedProject: Project) {
      showModalDelete.value = !showModalDelete.value;
      currentProject.value = selectedProject;
   }
   async function deleteCurrentProject() {
      confirmLoader.value = true;
      await deleteProject(currentProject.value!);

      confirmLoader.value = false;
      handleModalDelete({} as Project);
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
      populateProjects();
   }

   return {
      populateProjects,
      searchOnList,
      setFilter,
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
