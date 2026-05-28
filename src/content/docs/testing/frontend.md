---
title: Frontend
slug: testing/frontend
sidebar:
  order: 1
---

# Frontend Testing with Cypress: Ensuring a Flawless User Experience

We use [Cypress](https://www.cypress.io/) for frontend testing. It runs real browser tests, gives you live feedback, and works with React, Vue, Angular, and most other frontend frameworks.

## Setting Up Cypress

1. Install Cypress as a dev dependency:

```bash
npm install cypress --save-dev
```

2. Add a test script to `package.json`:

```json
{
  "scripts": {
    "test": "npx cypress open"
  }
}
```

3. Run Cypress for the first time:

```bash
npm run test
```

Cypress will open its test runner and create example files so you have something to start from.

## Writing Your First Test

1. Create a new file in the `cypress/e2e` directory. Name it `my_first_test.cy.js`.

2. Add this code:


```javascript
/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  it("displays two todo items by default", () => {
    cy.get(".todo-list li").should("have.length", 2);

    cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
    cy.get(".todo-list li").last().should("have.text", "Walk the dog");
  });
});
```

3. Start your development server, then run Cypress:

```bash
npm run test
```

4. Select your test file from the Cypress Test Runner.

Cypress will open a browser and run through the test steps in real time.
