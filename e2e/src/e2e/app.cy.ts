describe('e2e', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            'https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles',
            { fixture: 'vehicles.json' }
        );
        cy.intercept(
            'GET',
            'https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/xe',
            { fixture: 'xe.json' }
        );
        cy.intercept(
            'GET',
            'https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/xf',
            { fixture: 'xf.json' }
        );
        cy.intercept(
            'GET',
            'https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/xj',
            { fixture: 'xj.json' }
        );
        cy.intercept(
            'GET',
            'https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/fpace',
            { fixture: 'fpace.json' }
        );

        cy.visit('/')
    });

    it('should display a card for each vehicle, excluding ones that do not exist', () => {
        cy.get('lib-vehicle-card').should('have.length', 4);

        cy.get('lib-vehicle-card').eq(0).within(() => {
            cy.get('.vehicle__image img').should('have.attr', 'src', '/images/1x1/xe_k17.jpg');
            cy.get('.vehicle__name').should('contain.text', 'JAGUAR XE');
            cy.get('.vehicle__price').should('contain.text', 'From £30,000');
            cy.get('.vehicle__description').should('contain.text', 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced');
        });
        cy.get('lib-vehicle-card').eq(1).within(() => {
            cy.get('.vehicle__image img').should('have.attr', 'src', '/images/1x1/xf_k17.jpg');
            cy.get('.vehicle__name').should('contain.text', 'JAGUAR XF');
            cy.get('.vehicle__description').should('contain.text', 'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.');
        });
        cy.get('lib-vehicle-card').eq(2).within(() => {
            cy.get('.vehicle__image img').should('have.attr', 'src', '/images/1x1/xj_k16.jpg');
            cy.get('.vehicle__name').should('contain.text', 'JAGUAR XJ');
            cy.get('.vehicle__description').should('contain.text', 'Premium luxury saloon, spacious and beautiful yet powerfully agile.');
        });
        cy.get('lib-vehicle-card').eq(3).within(() => {
            cy.get('.vehicle__image img').should('have.attr', 'src', '/images/1x1/fpace_k17.jpg');
            cy.get('.vehicle__name').should('contain.text', 'JAGUAR F-PACE');
            cy.get('.vehicle__price').should('contain.text', 'From £40,000');
            cy.get('.vehicle__description').should('contain.text', 'Jaguar\'s luxury performance SUV.');
        });
    });

    it('should display the cards at 25% width on desktop', () => {
        cy.viewport(1028, 1000);

        cy.get('lib-vehicle-card').eq(0).invoke('outerWidth').should('be.eq', 257);
        cy.get('lib-vehicle-card').eq(1).invoke('outerWidth').should('be.eq', 257);
        cy.get('lib-vehicle-card').eq(2).invoke('outerWidth').should('be.eq', 257);
        cy.get('lib-vehicle-card').eq(3).invoke('outerWidth').should('be.eq', 257);
    });

    it('should display the cards at 50% width on tablet', () => {
        cy.viewport(770, 1000);

        cy.get('lib-vehicle-card').eq(0).invoke('outerWidth').should('be.eq', 385);
        cy.get('lib-vehicle-card').eq(1).invoke('outerWidth').should('be.eq', 385);
        cy.get('lib-vehicle-card').eq(2).invoke('outerWidth').should('be.eq', 385);
        cy.get('lib-vehicle-card').eq(3).invoke('outerWidth').should('be.eq', 385);
    });

    it('should display the cards at full width on mobile', () => {
        cy.viewport(768, 1000);

        cy.get('lib-vehicle-card').eq(0).invoke('outerWidth').should('be.eq', 768);
        cy.get('lib-vehicle-card').eq(1).invoke('outerWidth').should('be.eq', 768);
        cy.get('lib-vehicle-card').eq(2).invoke('outerWidth').should('be.eq', 768);
        cy.get('lib-vehicle-card').eq(3).invoke('outerWidth').should('be.eq', 768);
    });
});

