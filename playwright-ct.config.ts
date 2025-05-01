import { defineConfig, devices } from "@playwright/experimental-ct-react";

export default defineConfig({
  testDir: "./components",
  snapshotDir: "./components",
  snapshotPathTemplate: "{snapshotDir}/{testFileDir}/__snapshot__/{arg}{ext}",
  timeout: 10 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0, // retry on CI only
  workers: process.env.CI ? 1 : undefined, // opt out of parallel tests on CI.
  reporter: [["html", { open: "never" }]], // the report is only accessible from the host
  use: {
    trace: "retain-on-failure",
    video: "retain-on-failure",
    ctPort: 3100,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
