/// <reference types="cypress" />

describe("HelloLerna", () => {
  it("should display header text", () => {
    cy.visit("/");
    cy.contains("h1", "Hello Lerna");
  });
});
