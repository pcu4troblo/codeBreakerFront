it('should visit home', () => {
    cy.visit('http://localhost:4200');
});


it('Button exists', () => {
   cy.get('button');
});

it('Input exists', () => {
    cy.get('input');
 });

 it('Input 2 writes 1234', () => {
    cy.get('input#i1').type('1234');
 });

 it('Input 1 writes 1234', () => {
    cy.get('input#i2').type('1234');
 });

 it('Button 1 clicks', () => {
    cy.get('button#b1').click();
 });

 it('Button 2 clicks', () => {
    cy.get('button#b2').click();
 });

 it('Label exists', () => {
    cy.get('h4');
 });

 it('Label shows', () => {
    cy.get('h4').contains('XXXX');
 });

 it('label shows ____', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type('4321');
    cy.get('button#b2').click();
    cy.get('h4').contains('____');
 });

 it('label shows X___', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type('1423');
    cy.get('button#b2').click();
    cy.get('h4').contains('X___');
 });

 it('label shows XX__', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type('1243');
    cy.get('button#b2').click();
    cy.get('h4').contains('XX__');
 });

 it('label shows XXX', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type('1235');
    cy.get('button#b2').click();
    cy.get('h4').contains('XXX');
 });

 it('label shows _', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type('6782');
    cy.get('button#b2').click();
    cy.get('h4').contains('_');
 });
 
 it('label shows __', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type('6742');
    cy.get('button#b2').click();
    cy.get('h4').contains('__');
 });
 
 it('label shows ___', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type('3415');
    cy.get('button#b2').click();
    cy.get('h4').contains('___');
 });
 
 it('label shows ERROR if has less than 4 digits', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type('341');
    cy.get('button#b2').click();
    cy.get('h4').contains('ERROR');
 });

 it('label shows ERROR if has more than 4 digits', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type('34156');
    cy.get('button#b2').click();
    cy.get('h4').contains('ERROR');
 });

 it('label shows ERROR if has a letter', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type('34J5');
    cy.get('button#b2').click();
    cy.get('h4').contains('ERROR');
 });

 it('label shows ERROR if is empty', () => {
    cy.get('input#i1').clear();
    cy.get('input#i1').type(' ');
    cy.get('button#b2').click();
    cy.get('h4').contains('ERROR');
 });


 
