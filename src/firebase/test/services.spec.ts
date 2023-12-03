import { expect, test, describe } from "vitest";
import { login } from "../services";

describe("login tests", async () => {
  await login(
    import.meta.env.VITE_FIREBASE_EMAIL,
    import.meta.env.VITE_FIREBASE_PASSWORD
  );

  test("token be defined", async () => {
    const token = JSON.parse(localStorage.getItem("token") as string);

    expect(token).toBeDefined();
  });

  test("user be defined", async () => {
    const user = JSON.parse(localStorage.getItem("user") as string);

    expect(user).toBeDefined();
  }); 
});
