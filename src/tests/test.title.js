const expect = require('chai').expect;

describe('Bright events App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Bright events App');
  });
});
