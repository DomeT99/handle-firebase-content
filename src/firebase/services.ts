import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setLoginRes } from "./utils";
import { type Credentials } from "@/utils/types";

export async function login(credentials: Credentials) {
  debugger;
  const { email, password } = credentials;

  try {
    const auth = getAuth();
    const signIn = await signInWithEmailAndPassword(auth, email, password);

    setLoginRes(signIn);
  } catch (error: any) {
    console.log(error);
    // const errorCode = error.code;
    // const errorMessage = error.message;
  }
}
