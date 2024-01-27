import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHandleErrorStore = defineStore('handleErrorStore', () => {
   const showErrorSnackBar = ref<boolean>(false);

   function handleError(error: unknown) {
      showErrorSnackBar.value = !showErrorSnackBar.value;
      throw error;
   }

   return {
      showErrorSnackBar,
      handleError
   };
});
