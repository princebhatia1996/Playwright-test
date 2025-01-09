import { defineConfig } from "@playwright/test";

export default defineConfig({
  name: "My Playwright Project",
  testDir: "tests",
  timeout: 30000,
  use: {
    browserName: "chromium",
    headless: true,
  },
  projects: [
    {
      name: "Playwright",
      use: { browserName: "chromium" },
    },
  ],
  reporter: [["list"], ["json", { outputFile: "test-results.json" }]],
});
