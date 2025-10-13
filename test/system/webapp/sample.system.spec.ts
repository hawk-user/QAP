describe('Welcome System Test', () => {
    it('should display "Bienvenue sur la page QAP" on the landing page', () => {
        cy.visit('/');
        cy.contains('Bienvenue sur la page QAP').should('be.visible');
    })
})