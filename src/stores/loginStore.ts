import { ref } from "vue";
import { defineStore } from "pinia";
import type { Credentials } from "@/utils/types";
import type { UserCredential } from "firebase/auth";
import { getToken, login } from "../firebase/services";
import { setLoginRes } from "../firebase/utils";
import router from "@/router";

export const useLoginStore = defineStore("loginStore", () => {
  const credentials = ref<Credentials>({
    email: "",
    password: "",
  });

  const token = ref("");

  async function triggerLogin() {
    await login(credentials.value);
    redirectAfterLogin();
  }

  async function triggerGetToken() {
    token.value = await getToken() as string;
    console.log(token.value);
  }

  function redirectAfterLogin() {
    router.replace("/home");
  }

  return {
    credentials,
    triggerLogin,
    triggerGetToken,
  };
});
