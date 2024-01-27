import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { handleData, handleDeleteData } from './dashboardUtils';
import { useHandleErrorStore } from '@/stores/handleErrorStore';
import type { Project } from '@/types/projects';

export async function getAllProjects(nameOfCollection: string) {
   try {
      let docs = await getDocs(collection(db, nameOfCollection));
      let handleDocs = await handleData(docs);

      return handleDocs;
   } catch (error) {
      useHandleErrorStore().handleError(error);
   }
}

export async function deleteProject(project: Project) {
   try {
      await handleDeleteData(project, db);
   } catch (error) {
      useHandleErrorStore().handleError(error);
   }
}

export async function setProjectStatus(project: Project) {
   try {
      await updateDoc(doc(db, 'Projects', project.id), {
         active: !project.active
      });
   } catch (error) {
      useHandleErrorStore().handleError(error);
   }
}
