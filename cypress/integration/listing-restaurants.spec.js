describe('Listing restaurants', () => {
    it("Shows restaurants from the server", () => {
        const sushiPlace = "Sushi Place";
        const pizzaPlace = "Pizza Place";

        cy.server({ force404: true });

        cy.route({
            method: 'GET',
            url: 'https://api.outsidein.dev/IKwvFVz2VS0wTCuWRCiebKKe4KsYBQeL/restaurants',
            response: [
                { id: 1, name: sushiPlace },
                { id: 2, name: pizzaPlace },
            ],
        });

        cy.visit('/');
        cy.contains(sushiPlace);
        cy.contains(pizzaPlace);
    });
});