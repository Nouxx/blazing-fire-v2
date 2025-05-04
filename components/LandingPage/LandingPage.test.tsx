import { test, expect } from "@playwright/experimental-ct-react";
import LandingPage from "./LandingPage";

test("should work", async ({ mount }) => {
  const component = await mount(<LandingPage />);
  await expect(component).toContainText("The fastest way to build");
  await expect(component).toHaveScreenshot();
});
