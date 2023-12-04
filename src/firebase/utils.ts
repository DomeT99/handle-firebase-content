import { setLocalStorage } from "@/utils/utils";
import type { UserCredential } from "firebase/auth";
import router from "@/router";

export function setLoginRes(signIn: UserCredential) {
  setLocalStorage("user", JSON.stringify(signIn.user));
  setLocalStorage("token", JSON.stringify(signIn.user.refreshToken));
}

export function redirectAfterLogin() {
  router.replace("/home");
}
