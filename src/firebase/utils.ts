import { type DocumentData, QuerySnapshot, addDoc, collection, doc, DocumentReference } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from './firebase';
import { type Image, type Project, type ProjectDetails } from '../utils/types';
import { isBlankArray } from '@/utils/utils';

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

export async function handleProjectRequest(project: ProjectDetails) {
   try {
      let coverRef = !isBlankArray(project.cover!) ? await createImageDocument(project.cover![0], 'Cover') : '';

      let imagesRef: DocumentReference<DocumentData, DocumentData>[] = [];
      const promises = project.images!.map(async (image) =>
         imagesRef.push(await createImageDocument(image as File, 'Images'))
      );

      await Promise.all(promises);

      return {
         title: project.title!,
         description: project.description!,
         cover: coverRef,
         images: imagesRef
      };
   } catch (error) {
      throw error;
   }
}

export async function createImageDocument(
   image: File,
   collectionName: string
): Promise<DocumentReference<DocumentData, DocumentData>> {
   try {
      let cover: Image = {
         src: await uploadImage(image as File),
         alt: image.name
      };

      let response = await addDoc(collection(db, collectionName), cover);
      let reference = doc(db, '/' + collectionName + '/' + response.id);

      return reference;
   } catch (error) {
      throw error;
   }
}

export async function uploadImage(file: File): Promise<string> {
   const storage = getStorage();
   const storageRef = ref(storage, file.name);

   const snapshot = await uploadBytes(storageRef, file);
   const url = await getDownloadURL(snapshot.ref);

   return url;
}
