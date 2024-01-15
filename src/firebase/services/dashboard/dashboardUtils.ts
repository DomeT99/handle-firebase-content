import type { Project } from '@/types/projects';
import type { DocumentData, QuerySnapshot } from 'firebase/firestore';

export async function handleData(data: QuerySnapshot<DocumentData, DocumentData>): Promise<Project[]> {
   let projects: Project[] = [];

   const promises = data.docs.map(async (item: any) => {
      let newItem = {
         id: item.id,
         ...item.data()
      };

      projects.push(newItem);
   });

   await Promise.all(promises);

   return projects;
}
