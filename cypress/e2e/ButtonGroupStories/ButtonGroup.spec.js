describe('Button Group Test Cases', () => {
    beforeEach(() => {
        cy.visit('http://localhost:6006/iframe.html?id=components-buttongroup--button-group-stories');
    });

    describe('ButtonGroup CheckBox', () => {
        const id = '#button-group-checkbox'
        const checkboxClass = '.inclue-checkbox-root'

        it('should render 10 components', () => {
            cy.get(`${id}`).should('be.exist');
            cy.get(`${id} > div`).should('have.length', 12);
        })

        it('first button should be check if it is clicked', () => {
            cy.get(`${id}`).should('be.exist');

            cy.get(`${id} ${checkboxClass}`).first()
                .invoke('attr', 'aria-checked')
                .then((e) => {
                    expect('false', `${e}`);
                })

            cy.get(`${id} ${checkboxClass}`).first().click();

            cy.get(`${id} ${checkboxClass}`).first()
                .invoke('attr', 'aria-checked')
                .then((e) => {
                    expect('true', `${e}`)
                })
        })

        it('first button icon should be check if it is clicked', () => {
            cy.get(`${id}`).should('be.exist');

            cy.get(`${id} ${checkboxClass}`).first().click();

            cy.get(`${id} ${checkboxClass}`).first().get(`polygon.checkmark`).first().should('be.visible')
            cy.get(`${id} ${checkboxClass}`).first().get(`polygon.checkmark`).first().should('be.exist')

        })
    });

    describe('ButtonGroup Radio', () => {
        const id = '#button-group-radio'
        it('should render 12 components', () => {
            cy.get(`${id}`).should('be.exist');
            cy.get(`${id} > div`).should('have.length', 12);
            cy.get(`${id} button`).should('have.length', 12);
        })
        it('first button should be check if it is clicked', () => {
            cy.get(`${id}`).should('be.exist');
            cy.get(`${id} button`).first()
                .invoke('attr', 'aria-checked')
                .then((e) => {
                    expect('false', `${e}`);
                })
            cy.get(`${id} button`).first().click();
            cy.get(`${id} button`).first()
                .invoke('attr', 'aria-checked')
                .then((e) => {
                    expect('true', `${e}`)
                })
        })
        it('first button icon should be check if it is clicked', () => {
            cy.get(`${id}`).should('be.exist');
            cy.get(`${id} button`).first().click();
            cy.get(`${id} button`).first().get(`.ey-button-item__icon svg`).first().should('be.visible')
            cy.get(`${id} button`).first().get(`.ey-button-item__icon svg`).first().should('be.exist')
        })
    });
});
