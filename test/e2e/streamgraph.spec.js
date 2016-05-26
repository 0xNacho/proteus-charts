
describe('Simple streamgraph', () => {
  it('should match the title', () => {
    browser.driver.get('http://localhost:9000/examples/simple_streamgraph.html');
    expect(browser.getTitle()).toEqual('Simple streamgraph');
  }); 
});