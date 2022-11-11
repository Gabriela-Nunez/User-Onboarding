describe('Quotes App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  const inputUsername = () => cy.get('input[name=username]');
  const inputUserLastName = () => cy.get('input[name=userLastName');
  const inputEmail = () => cy.get('input[name=email');
  const inputPassword = () => cy.get('input[name=password');
  const inputTermsOfService = () => cy.get('input[name=termsOfService]');
  const inputSubmit = () => cy.get('input[type=submit]');

  it('sanity check to check tests work', () => {
    expect(1+2).to.equal(3);
    expect(3+3).to.equal(6);
    expect({}).not.to.equal({});
  })

  it('the proper elements are showing', () => {
    inputUsername().should('exist');
    inputUserLastName().should('exist');
    inputEmail().should('exist');
    inputPassword().should('exist');
    inputTermsOfService().should('exist');
    inputSubmit().should('exist');
  })






































})