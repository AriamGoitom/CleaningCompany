describe("Testing CleaningCompany page", () => {

  beforeEach(() => {
    cy.visit("../../index.html");
  });

  it("Opens the correct page", () => {
    cy.get(".nav-area >ul >li").contains("Login").click();
    cy.url().should("include", "/login.html");
  });


it("Contains correct Header text", () => {
  cy.get("h1").contains("Cleaning Company").should("exist");
});

it("Contains visable nav-links", () => {
  cy.get(".nav-area >ul >li").each(($li) => {
    cy.wrap($li).should("be.visible");
  });
});

it("Displays hamburgermeny in smaller screens ", () => {
  cy.viewport("iphone-x");

  cy.get(".btn-area").should("be.visible");
  cy.get(".btn-area").click();
  cy.get(".nav-area ul").should("be.visible");
  cy.get(".btn-area").click();
  cy.get(".nav-area ul").should("not.be.visible");
});
});
