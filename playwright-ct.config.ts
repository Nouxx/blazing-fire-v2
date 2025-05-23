import { defineConfig, devices } from "@playwright/experimental-ct-react";
import { resolve } from "path";

export default defineConfig({
  testDir: "./components",
  snapshotDir: "./components",
  snapshotPathTemplate: "{snapshotDir}/{testFileDir}/__snapshot__/{arg}{ext}",
  timeout: 10 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0, // retry on CI only
  workers: process.env.CI ? 1 : undefined, // opt out of parallel tests on CI.
  reporter: [
    ["html", { open: "never", outputFolder: "playwright-report" }],
    ["json", { outputFile: "playwright-report/results.json" }],
  ],
  use: {
    trace: "retain-on-failure",
    video: "retain-on-failure",
    ctPort: 3100,
    ctViteConfig: {
      resolve: {
        alias: {
          "@": resolve(__dirname),
        },
      },
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
