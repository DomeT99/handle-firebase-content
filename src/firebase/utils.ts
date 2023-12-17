import {
  type DocumentData,
  DocumentReference,
  QuerySnapshot,
  getDoc,
} from "firebase/firestore";
import { type Image, type Project } from "../utils/types";
import { isBlankArray } from "../utils/utils";

/**
 * Handles the data from a query snapshot.
 *
 * @param {QuerySnapshot<DocumentData, DocumentData>} data - The query snapshot containing the data.
 * @return {Project[]} An array of Card objects representing the projects.
 */
export async function handleData(
  data: QuerySnapshot<DocumentData, DocumentData>
) {
  let projects: Project[] = [];

  const promises = data.docs.map(async (item: any) => {
    let newItem = {
      id: item.id,
      ...item.data(),
    };

    if (newItem.cover) {
      newItem.cover = await handleCover(newItem.cover);
    }

    if (!isBlankArray(newItem.images)) {
      newItem.images = await handleImages(newItem.images);
    }

    projects.push(newItem);
  });

  await Promise.all(promises);

  return projects;
}

/**
 * Retrieves the cover data from the database and returns it with the cover ID.
 *
 * @param {DocumentReference<Image, Image>} cover - The reference to the cover document.
 * @return {Object} - An object containing the cover ID and the cover data.
 */
async function handleCover(cover: DocumentReference<Image, Image>) {
  let coverDb = await getDoc<Image, Image>(cover);

  return {
    id: coverDb.id,
    ...coverDb.data(),
  };
}

/**
 * Handles the images by retrieving their corresponding documents from the database.
 *
 * @param {Image[]} images - An array of images to be processed.
 * @return {Promise<any[]>} - A promise that resolves to an array of processed images.
 */
async function handleImages(images: Image[]) {
  const imagePromises = images.map(async (image: any) => {
    const imageDb = await getDoc<Image, Image>(image);

    return {
      id: imageDb.id,
      ...imageDb.data(),
    };
  });

  return await Promise.all(imagePromises);
}
