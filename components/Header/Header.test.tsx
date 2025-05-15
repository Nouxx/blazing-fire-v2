import { expect, test } from "@playwright/experimental-ct-react";

import { AppHeader } from "@/components/Header/views/AppHeader";
import { getSnapshotPath } from "@/lib/getSnapshotPath";
import { MOCK_USER } from "@/mocks/user.mock";

test("AppHeader with logged in user", async ({ mount }) => {
  const component = await mount(<AppHeader user={MOCK_USER} />);
  await expect(component).toHaveScreenshot(getSnapshotPath("logged in user"));
});

test("AppHeader without user", async ({ mount }) => {
  const component = await mount(<AppHeader user={undefined} />);
  await expect(component).toHaveScreenshot(getSnapshotPath("no user"));
});
