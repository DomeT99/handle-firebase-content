import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { handleData } from './dashboardUtils';

export async function getAllProjects(nameOfCollection: string) {
   try {
      let docs = await getDocs(collection(db, nameOfCollection));
      let handleDocs = await handleData(docs);

      return handleDocs;
   } catch (error) {
      throw error;
   }
}
