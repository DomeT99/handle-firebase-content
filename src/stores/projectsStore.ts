import { createNewProject } from '@/firebase/services/projects/projectsService';
import type { ProjectDetails } from '@/types/projects';
import { isNull, isUndefined } from '@/utils/utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProjectsStore = defineStore('projectsStore', () => {
   let projectsDetails = ref<ProjectDetails>({
      id: '',
      title: '',
      description: '',
      images: [],
      cover: []
   });
   let showSnackbar = ref<boolean>(false);
   let loader = ref<boolean>(false);
   let isModified = ref<boolean>(true);

   async function saveProject() {
      loader.value = true;
      let response = await createNewProject(projectsDetails.value);

      if (!isNull(response.id) && !isUndefined(response.id)) {
         $reset();
         showSnackbarProject();
      }
      loader.value = false;
      handleModifiedFlag(true);
   }
   function handleModifiedFlag(newValue: boolean) {
      isModified.value = newValue;
   }
   function showSnackbarProject() {
      showSnackbar.value = true;
   }
   function $reset() {
      projectsDetails.value = {
         id: '',
         title: '',
         description: '',
         images: [],
         cover: []
      };
   }

   return { projectsDetails, showSnackbar, loader, isModified, saveProject, handleModifiedFlag };
});
