module.exports = {
    'nightwatch demo2 test': function (browser) {
        browser
            .url("https://the-internet.herokuapp.com/").useXpath()
            .waitForElementVisible("//a[contains(text(),'A/B Testing')]")
            .click("//a[contains(text(),'A/B Testing')]")
        browser.useCss().getText(".example h3", function (result) {
            console.log("*****" + result.value + "*********")
            browser.assert.containsText(".example h3", "A/B Test");
            browser.saveScreenshot("tests_output/abTestingControl.png");
        })

    }
};