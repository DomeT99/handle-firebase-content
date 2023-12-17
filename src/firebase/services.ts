import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { handleData } from "./utils";

/**
 * Retrieves all data from the specified collection.
 *
 * @param {string} nameOfCollection - The name of the collection to retrieve data from.
 * @return {Promise<any>} A promise that resolves with the retrieved data.
 */
export async function getAllData(nameOfCollection: string) {
  try {
    let docs = await getDocs(collection(db, nameOfCollection));
    let handleDocs = await handleData(docs);

    return handleDocs;
  } catch (error) {
    throw error;
  }
}
