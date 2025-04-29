import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  // todo: move this to base url and comment why 3001 (never uses dev server as we dont need hot reload)
  await page.goto("http://localhost:3001");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Next.js and Supabase Starter Kit/);
});
