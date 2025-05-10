import { defineConfig, devices } from "@playwright/test";

// Read environment variables from "env.local" file
import dotenv from "dotenv";
import path from "node:path";
dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const { NEXT_START_PORT } = process.env;
const NEXT_TEST_URL = `http://localhost:${NEXT_START_PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0, // retry on CI only
  workers: process.env.CI ? 1 : undefined, // opt out of parallel tests on CI.
  reporter: [["html", { open: "never" }]], // the report is only accessible from the host
  use: {
    baseURL: NEXT_TEST_URL,
    trace: "retain-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "pnpm build && pnpm start",
    url: NEXT_TEST_URL,
    name: "Next.js production build",
  },
});
