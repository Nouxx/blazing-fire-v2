import { expect, test } from "@playwright/test";

import { HomePage } from "./pages/homepage.page";
import { ProtectedPage } from "./pages/protected.page";
import { SignInPage } from "./pages/sign-in.page";

test("Authentication", async ({ page }) => {
  const homePage = new HomePage(page);
  const signInPage = new SignInPage(page);
  const protectedPage = new ProtectedPage(page);

  await page.goto("/");
  await expect(page).toHaveTitle(/Blazing Fire/);
  await homePage.goToSignIn();
  await signInPage.fillSignInForm("clement.vannouque@gmail.com", "qwerty1");
  await signInPage.submitSignInForm();
  await protectedPage.assertPage();
});
