module.exports = {
  '@tags': ['smoke'],
  'nightwatch demo1 test': function (browser) {
    const page = browser.page.homePage();
    page
      .navigate()

    browser
      .waitForElementVisible(".heading")
      .assert.containsText(".heading", "Welcome to the-internet");
  }
};