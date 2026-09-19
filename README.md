# SDET Take-Home Assessment

This project is a small test automation framework built with Playwright and TypeScript to validate the login functionality of the sample application provided for the assessment.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- npm

## Project Structure

```text
.
├── pages/
│   ├── LoginPage.ts
│   └── SecureAreaPage.ts
├── tests/
│   └── login.spec.ts
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── README.md
```

## Test Scenarios

The project includes the following automated scenarios:

1. Successful login with valid credentials
2. Login with an invalid username
3. Login with an invalid password
4. Login with an empty username
5. Login with an empty password

The required positive and negative scenarios are included, with additional coverage for empty credential fields.

## Prerequisites

Before running the project, make sure the following tools are installed:

- Node.js
- npm

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Install Playwright browsers if required:

```bash
npx playwright install
```

## Running the Tests

Run all tests in headless mode:

```bash
npm test
```

Run tests with the browser visible:

```bash
npm run test:headed
```

Run tests using Playwright UI mode:

```bash
npm run test:ui
```

## Test Report

After executing the tests, open the Playwright HTML report with:

```bash
npm run report
```

## Design Decisions

### Playwright and TypeScript

Playwright was selected because it is the preferred framework for this assessment and provides reliable browser automation, auto-waiting, tracing, reporting, and strong support for modern web applications.

TypeScript was used to provide type safety, improved IDE support, and maintainable automation code.

### Page Object Model

The project uses the Page Object Model to separate page-specific locators and interactions from test logic.

- `LoginPage` contains login-page locators and login interactions.
- `SecureAreaPage` represents elements displayed after a successful login.
- Test assertions remain inside the test specifications so expected behavior is easy to understand.

This structure reduces duplication and makes UI changes easier to maintain.

### Test Independence

Each test:

- Receives its own Playwright page fixture
- Navigates independently to the login page
- Uses its own test data
- Does not depend on another test's execution order or state

This allows the scenarios to run safely in parallel.

### Locators

User-facing locators such as `getByLabel()` and `getByRole()` are preferred where appropriate because they are readable and less coupled to implementation details.

Stable CSS selectors are used where they provide a simple and reliable option, such as the flash-message element.

### Debugging and Reporting

The Playwright configuration retains the following artifacts when a test fails:

- Trace
- Screenshot
- Video

The HTML reporter is enabled to make test execution results easier to review and troubleshoot.

## Potential Improvements

For a larger production automation framework, I would consider adding:

- Environment-specific configuration
- Dedicated test-data fixtures
- Authentication state reuse where appropriate
- API-level test coverage
- CI/CD pipeline integration
- Cross-browser execution for Chromium, Firefox, and WebKit
- Test tagging for smoke, regression, and other test suites
- Custom fixtures for shared setup
- Additional reporting integrations
