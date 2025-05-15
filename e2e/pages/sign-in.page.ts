import { type Locator, type Page } from "@playwright/test";

export class SignInPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.getByRole("textbox", { name: "you@example.com" });
    this.passwordField = page.getByRole("textbox", { name: "Your password" });
    this.submitButton = page.getByRole("button", { name: "Sign in" });
  }

  async fillSignInForm(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  async submitSignInForm() {
    await this.submitButton.click();
  }
}
