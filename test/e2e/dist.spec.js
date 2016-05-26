browser.ignoreSynchronization = true;

describe('Vendor script', () => {
    it('d3 var should exist', () => {
        browser.driver.get('http://localhost:9000/examples/dist_example.html');
        //d3 is too large to catch and protractor throws an error. Take d3.svg for testing.
        browser.executeScript('return d3.svg').then((d3svg) => {
            expect(d3svg).not.toBe(undefined);
        });
    });

    it('d3-tip var should exist', () => {
        browser.executeScript('return d3.tip').then((d3Tip) => {
            expect(d3Tip).not.toBe(undefined);
        });
    });

    it('chart should include reactors', () => {
        browser.executeScript('return linechart.reactor').then((reactor) => {
            expect(reactor).not.toBe(undefined);
        });
    });

});