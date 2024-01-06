describe("Test /Servers CRUD", () => {
  it("Navigate to " + Cypress.env("FRONT_URL"), () => {
    cy.visit(Cypress.env("FRONT_URL"));
  });
});
