browser.ignoreSynchronization = true;

describe('Simple linechart', () => {
  it('should match the title', () => {
    browser.driver.get('http://localhost:9000/examples/simple_linechart.html');
    expect(browser.getTitle()).toEqual('Simple linechart');
  });

  it('should have a correct number of elemenets', () => {
    browser.executeScript('return linechart').then( (linechart) => {
      expect(1).toEqual(linechart.data.length);
    });
  });

});