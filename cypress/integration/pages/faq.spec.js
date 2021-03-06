describe('FAQ Page', () => {
  const SEARCH = 'ask'
  const Q = 'What should I ask?'
  const A = 'Anything you like'

  before(() => {
    cy.visit('/radicalcollaboration/faq')
  })

  it('title section loads', () => {
    cy.contains('How can we help?');
  })

  it('gets faq by search', () => {
    cy.get('[data-cy=search-faq]').click().type(SEARCH)
    cy.get('[data-cy=faq-question]')
      .first()
      .contains(Q)
    cy.get('[data-cy=faq-question]')
      .first()
      .click()
    cy.get('[data-cy=faq-answer]')
      .contains(A)
  })
})
