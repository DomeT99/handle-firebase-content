import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { handleData, handleProjectRequest } from './projectsUtils';
import type { ProjectDetails } from '@/types/projects';

export async function getAllProjects(nameOfCollection: string) {
   try {
      let docs = await getDocs(collection(db, nameOfCollection));
      let handleDocs = await handleData(docs);

      return handleDocs;
   } catch (error) {
      throw error;
   }
}

export async function createNewProject(project: ProjectDetails) {
   try {
      let request = await handleProjectRequest(project);
      return await addDoc(collection(db, 'Projects'), request);
   } catch (error) {
      throw error;
   }
}
