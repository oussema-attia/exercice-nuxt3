describe("Test " + Cypress.env("FRONT_URL"), () => {
  beforeEach(() => {
    cy.visit(Cypress.env("FRONT_URL"));
  });
  describe("Side bar", () => {
    it("Have 5 clickable menu items and sub items", () => {
      cy.get(".ant-menu li").should("have.length", 5);
    });
    it(
      "Click on Servers menu navigate to " +
        Cypress.env("FRONT_URL") +
        "/en/servers",
      () => {
        cy.contains("Servers").click();
        cy.location().should((location) => {
          expect(location.href).to.eq(Cypress.env("FRONT_URL") + "/en/servers");
        });
      }
    );
    it(
      "Click on Home menu navigate to " + Cypress.env("FRONT_URL") + "/en/",
      () => {
        cy.contains("Home").click();
        cy.location().should((location) => {
          expect(location.href).to.eq(Cypress.env("FRONT_URL") + "/en");
        });
      }
    );
  });

  describe(Cypress.env("FRONT_URL") + "/en/Servers/add", () => {
    beforeEach(() => {
      cy.contains("Servers").click();
      cy.wait(1000);
      cy.get(".ant-btn").click();
    });
    it("Path is /en/servers/add", () => {
      // cy.get(".ant-btn").click();
      cy.location().should((location) => {
        expect(location.href).to.eq(
          Cypress.env("FRONT_URL") + "/en/servers/add"
        );
      });
    });
    it("Add server", () => {
      cy.location().should((location) => {
        expect(location.href).to.eq(
          Cypress.env("FRONT_URL") + "/en/servers/add"
        );
      });
    });
  });
});
