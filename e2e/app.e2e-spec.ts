import { E2EPage } from './app.po';

describe('e2e testing', function () {
    let page: E2EPage;

    beforeEach(() => {
        page = new E2EPage();
    });

    it('should display message saying "Displaying posts!"', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Displaying posts!');
    });
});
