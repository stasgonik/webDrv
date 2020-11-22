module.exports = {
  clickButton : function (element) {
    
    element.waitForExist(15000);
    element.waitForDisplayed(15000);
    element.waitForClickable(15000);


    element.click();
  },
  clickButtonJS : function (element) {

    element.waitForExist(15000);
    element.waitForDisplayed(15000);
    element.waitForClickable(15000);


    browser.execute("arguments[0].click();", element);
    element.click();
  },
  setField : function(element, value) {
    element.waitForExist(15000);
    element.waitForDisplayed(15000);
    element.waitForClickable(15000);
    element.waitForEnabled(15000);
    
    element.addValue(value);
  }
};
