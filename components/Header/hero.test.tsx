import { test, expect } from "@playwright/experimental-ct-react";
import Header from "./hero";

test("should work", async ({ mount }) => {
  const component = await mount(<Header />);
  await expect(component).toContainText("The fastest way to build");
  await expect(component).toHaveScreenshot();
});
