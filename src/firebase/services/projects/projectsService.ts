import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { handleProjectRequest } from './projectsUtils';
import type { ProjectDetails } from '@/types/projects';

export async function createNewProject(project: ProjectDetails) {
   try {
      let request = await handleProjectRequest(project);
      return await addDoc(collection(db, 'Projects'), request);
   } catch (error) {
      throw error;
   }
}
