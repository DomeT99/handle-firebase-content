import { createNewProject, getAllProjects } from '@/firebase/services/projects/projectsService';
import type { ProjectDetails } from '@/types/projects';
import { isNull, isUndefined, changeRoute } from '@/utils/utils';
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
   let loader = ref<boolean>(false);

   async function saveProject() {
      loader.value = true;
      let response = await createNewProject(projectsDetails.value);

      if (!isNull(response.id) && !isUndefined(response.id)) {
         $reset();
         await getAllProjects('Projects');
      }

      loader.value = false;
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

   return { projectsDetails, loader, saveProject };
});
