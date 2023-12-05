import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { type Credentials } from "@/utils/types";
import firebase from "firebase/compat/app";

export async function login(credentials: Credentials) {
  const { email, password } = credentials;

  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    console.log(error);
    // const errorCode = error.code;
    // const errorMessage = error.message;
  }
}

export function getToken() {
  try {
    const auth = firebase.auth();

    return auth.currentUser?.getIdToken().then((token) => token);
  } catch (error: any) {
    console.log(error);
    // const errorCode = error.code;
    // const errorMessage = error.message;
  }
}
