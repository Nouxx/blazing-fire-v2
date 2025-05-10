import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly signInLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole("link", { name: "Sign in" });
  }

  async goToSignIn() {
    await this.signInLink.click();
  }
}
