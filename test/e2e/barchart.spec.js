browser.ignoreSynchronization = true;

describe('Simple barchart', () => {
    it('should match the empty title', () => {
        browser.driver.get('http://localhost:9000/examples/simple_barchart.html');
        expect(browser.getTitle()).toEqual('Simple barchart');
    });

    it('should have a correct number of elemenets', () => {
        browser.executeScript('return barchart').then( (barchart) => {
            expect(1).toEqual(barchart.data.length);
        });
    });

});