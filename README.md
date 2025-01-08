# My Playwright Project

This project is a sample setup for using Playwright with TypeScript. It includes a basic test case to demonstrate how to write and run tests using Playwright.

## Project Structure

```
my-playwright-project
├── tests
│   ├── example.spec.ts      # Sample test case
├── playwright.config.ts      # Playwright configuration
├── package.json              # npm configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-playwright-project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the tests:**
   ```
   npx playwright test
   ```

## Usage

- The tests are located in the `tests` directory. You can add more test files as needed.
- Modify the `playwright.config.ts` file to customize your Playwright settings.
- Update the `package.json` file to add any additional scripts or dependencies.

## License

This project is licensed under the MIT License.