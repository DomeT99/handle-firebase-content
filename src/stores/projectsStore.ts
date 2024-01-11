import { createNewProject } from '@/firebase/services';
import type { ProjectDetails } from '@/utils/types';
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
         changeRoute('/dashboard');
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
