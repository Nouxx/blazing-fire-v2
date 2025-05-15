import { expect, type Locator, type Page } from "@playwright/test";

export class ProtectedPage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByText("Your user details");
  }

  async assertPage() {
    await expect(this.heading).toBeVisible();
  }
}
