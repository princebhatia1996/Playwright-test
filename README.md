# My Playwright Project

This project is a sample setup for using Playwright with TypeScript.
It has API and E2E UI tests which follow the page object model pattern.

## Project Structure

```
my-playwright-project
├── .gitignore                # Git ignore file
├── .vscode/                  # VSCode settings
├── bookingId.txt             # File to store booking ID
├── helpers/                  # Helper functions for tests
│   ├── authHelper.ts         # Authentication helper
│   └── bookingHelper.ts      # Booking helper
├── package.json              # npm configuration
├── playwright.config.ts      # Playwright configuration
├── README.md                 # Project documentation
├── test-results/             # Directory for test results
│   └── test-results.json     # JSON file for test results
├── tests/                    # Directory for test cases
│   ├── api/                  # API tests
│   │   ├── booking-auth.post.spec.ts  # Test for booking authentication
│   │   ├── booking.get.spec.ts        # Test for getting booking
│   │   └── booking.post.spec.ts       # Test for creating booking
│   ├── e2e/                       # End-to-end tests
│   │   ├── swag-labs.cart.spec.ts # Test for Swag Labs cart functionality
│   │   └── swag-labs.login.spec.ts# Test for Swag Labs login functionality
│   ├── lib/                       # Library for base test setup
│   │   └── base-test.ts           # Base test setup
│   └── pom/                       # Page Object Model classes
│       ├── cart.ts                # Cart page class
│       ├── checkout.ts            # Checkout page class
│       ├── inventory.ts           # Inventory page class
│       └── login.ts               # Login page class
├── tsconfig.json             # TypeScript configuration
```

## Setup Instructions

1. **Clone the repository:**

   ```
   git clone https://github.com/princebhatia1996/Playwright-test.git
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the tests:**

   ```
   For API tests: npm run test:api
   For E2E tests: npm run test:e2e
   ```

   - If you need to run tests separately I suggest downloading the VS code extension for playwright or use the scripts in the `Package.json` file

## Websites Used

- For section 1 - UI component I have used the website https://www.saucedemo.com/

- For section 2 - API component I have used the website https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-GetBooking

1. Add new tests under `/tests` folder
2. Add new page object classes under `/pages` folder, register the new pages in `/lib/base-test.ts`
3. Add any ultilities or helpers under `/lib` folder
4. The model we are following is the Playwright page object model for the UI tests recommendations [https://playwright.dev/docs/pom](https://playwright.dev/docs/pom)
