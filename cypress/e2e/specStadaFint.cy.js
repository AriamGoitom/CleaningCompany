describe('testing navbar links', () => {
  it('passes', () => {
    cy.visit('../../index.html')

    cy.get('.nav-area > ul > li').click({ multiple: true })
  })
})