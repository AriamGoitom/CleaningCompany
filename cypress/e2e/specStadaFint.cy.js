
describe("Testing CleaningCompany page", () => {
  it("Opens the correct page", () => {
    cy.visit("../../index.html");

    cy.get(".nav-area >ul >li").contains("Login").click();
    cy.url().should("include", "/login.html");
  });
});

it("Contains correct Header text", () => {
  cy.visit("../../index.html");

  cy.contains("Cleaning Company").should("exist");
});

it("Contains visable nav-links", () => {
  cy.visit("../../index.html");

  cy.get(".nav-area >ul >li").each(($li) => {
    cy.wrap($li).should("be.visible");
  });
});

it("Displays hamburgermeny in smaller screens ", () => {
  cy.visit("../../index.html");
  cy.viewport("iphone-x");

  cy.get(".btn-area").should("be.visible");
  cy.get(".btn-area").click();
  cy.get(".nav-area ul").should("be.visible");
  cy.get(".btn-area").click();
  cy.get(".nav-area ul").should("not.be.visible");
});
