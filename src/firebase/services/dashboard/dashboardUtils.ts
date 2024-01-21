import type { Project } from '@/types/projects';
import { isBlankArray, isTypeOf } from '@/utils/utils';
import { Firestore, deleteDoc, doc, type DocumentData, type QuerySnapshot } from 'firebase/firestore';

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

export async function handleDeleteData(project: Project, db: Firestore): Promise<void> {
   if (!isTypeOf(project.cover, 'string')) {
      const reference = doc(db, 'Cover', project.cover.id);
      await deleteDoc(reference);
   }

   if (!isBlankArray(project.images!)) {
      const promises = project.images?.map(async (image) => await deleteDoc(doc(db, 'Images', image.id)));
      await Promise.all(promises!);
   }

   await deleteDoc(doc(db, `/Projects/${project.id}`));
}
