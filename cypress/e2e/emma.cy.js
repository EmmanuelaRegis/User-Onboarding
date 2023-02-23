describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
it('sanity check', () => {

expect(true).to.equal(true);
expect('multiply').to.not.equal('subtract');
})
const nInput = () => cy.get("input[name=username]");
const eInput = () => cy.get("input[name=email]");
const pInput = () => cy.get("input[name=password]");
const cInput = () => cy.get("input[name=tos]").click();
const sButton = () => cy.get("input[value='Create a friend!']");


it("its showing", () => {
  nInput().should("exist");
  eInput().should("exist");
  pInput().should("exist");
  cInput().should("exist");
  sButton().should("exist");
})

it("type inputs", () => {
  nInput()
  .should("have.value", "")
  .type("Emma Regis")
  .should("have.value", "Emma Regis");

  eInput()
  .should("have.value", "")
  .type("Emmanuelaregis0607@gmail.com")
  .should("have.value", "Emmanuelaregis0607@gmail.com");

  pInput()
  .should("have.value", "")
  .type("reeree")
  .should("have.value", "reeree");

})

it('checkboxes', () => {
  nInput().type("Emma Regis");
  eInput().type("Emmanuelaregis0607@gmail.com");
  pInput().type("reeree");
  cInput().should("not.be.disabled");
})
it("submit the form data", () => {
  sButton().should("not.be.disabled");
})

})



