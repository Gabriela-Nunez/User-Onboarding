describe('Quotes App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  const inputUsername = () => cy.get('input[name=username]');
  const inputUserLastName = () => cy.get('input[name=userLastName');
  const inputEmail = () => cy.get('input[name=email');
  const inputPassword = () => cy.get('input[name=password');
  const inputTermsOfService = () => cy.get(`[type='checkbox']`).check();
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

  describe('Filing out the inputs', () => {
    it('can navigate to the site', () => {
      cy.url().should('include', 'localhost');
    })

    it('create new user should be disabled', () => {
      inputSubmit().should('be.disabled');
    })

    it('can type in the inputs', () => {
      inputUsername()
        .should('have.value', '')
        .type('Gabriela')
        .should('have.value', 'Gabriela');

      inputUserLastName()
        .should('have.value', '')
        .type('Nunez')
        .should('have.value', 'Nunez')  

      inputEmail()
        .should('have.value', '')
        .type('gabby@gabby.com')
        .should('have.value', 'gabby@gabby.com')

      inputPassword()
        .should('have.value', '')
        .type('password')
        .should('have.value', 'password') 
    })

    it('the create new user submit input should be enabled when all inputs are filled out and checkbox is checked', () => {
      inputUsername().type('Gabriela');
      inputUserLastName().type('Nunez');
      inputEmail().type('gabby@gabby.com');
      inputPassword().type('password');
      inputTermsOfService()
        cy.get('[type="checkbox"]').check() 
      inputSubmit().should('not.be.disabled').click()  
    })
  })





































})