import { expect, test, describe } from "vitest";
import { login } from "../services";
import type { Credentials } from "@/utils/types";

describe("login tests", async () => {
  const credentials: Credentials = {
    email: import.meta.env.VITE_FIREBASE_EMAIL,
    password: import.meta.env.VITE_FIREBASE_PASSWORD,
  };

  await login(credentials);

  test("token be defined", async () => {
    const token = JSON.parse(localStorage.getItem("token") as string);

    expect(token).toBeDefined();
  });

  test("user be defined", async () => {
    const user = JSON.parse(localStorage.getItem("user") as string);

    expect(user).toBeDefined();
  });
});
