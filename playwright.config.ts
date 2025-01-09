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
      name: "api",
      testDir: "tests/api",
      use: {
        browserName: "chromium",
        headless: true,
      },
      testMatch: ["**/booking*.spec.ts"],
    },
    {
      name: "swag-labs",
      use: {
        baseURL: "https://www.saucedemo.com/",
        browserName: "chromium",
        headless: true,
        viewport: { width: 1920, height: 1080 },
      },
      testMatch: ["**/*swag-labs*.spec.ts"],
    },
  ],
  reporter: [["list"], ["json", { outputFile: "test-results.json" }]],
});
