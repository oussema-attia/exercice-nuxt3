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

  describe("CRUD Servers", () => {
    beforeEach(() => {
      cy.contains("Servers").click();
    });

    describe("Add " + Cypress.env("FRONT_URL") + "/en/Servers/add", () => {
      beforeEach(() => {
        cy.wait(1000);
        cy.get(".ant-btn").click();
      });
      it("Path is /en/servers/add", () => {
        cy.location().should((location) => {
          expect(location.href).to.eq(
            Cypress.env("FRONT_URL") + "/en/servers/add"
          );
        });
      });
      it("Should have 3 form items", () => {
        cy.get(".ant-form-item").should("have.length", 3);
      });
      it("Add server", () => {
        cy.get("#form_item_name").type("name");
        cy.get('button[aria-checked="false"]').click();
        cy.get("#form_item_description").type("description");
        cy.get('button[type="submit"]').click();
        cy.location().should((location) => {
          expect(location.href).to.eq(Cypress.env("FRONT_URL") + "/en/servers");
        });
      });
    });

    describe("Delete " + Cypress.env("FRONT_URL") + "/en/Servers", () => {
      it("Delete server", () => {
        cy.get(".ant-table-row").last().find("a").contains("Delete").click();
        cy.get(".ant-popover-buttons span").contains("Yes").click();
      });
    });
  });
});
