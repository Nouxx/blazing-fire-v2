import { test, expect } from "@playwright/experimental-ct-react";
import { Header } from "./Header";
import { MOCK_USER } from "@/mocks/user.mock";

test("UI check for header", async ({ mount }) => {
  const component = await mount(<Header user={MOCK_USER} />);
  await expect(component).toHaveScreenshot();
});
