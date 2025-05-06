import { test, expect } from "@playwright/experimental-ct-react";
import { Header } from "./Header";
import { MOCK_USER } from "@/mocks/user.mock";

test("UI check with logged in user", async ({ mount }) => {
  const component = await mount(<Header user={MOCK_USER} />);
  await expect(component).toHaveScreenshot();
});

test("UI check without user", async ({ mount }) => {
  const component = await mount(<Header user={null} />);
  await expect(component).toHaveScreenshot();
});
