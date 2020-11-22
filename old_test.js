const assert = require('assert');

describe("Test Google register", () => {
  beforeEach(function () {
    browser.setWindowSize(1920, 1080);
    browser.url("./");
  });
  it("Try to go to the page register, generate data for new user and stop on mobile verify page", () => {
    let loginBtn = $("#gb_70");
    loginBtn.click();
    let createBtn = $("#ow311");
    createBtn.click();
    // browser.pause(2000);
    let createSelfBtn = $("//div[text()='Для себя']");
    createSelfBtn.waitForClickable(15000);
    browser.execute("arguments[0].click();", createSelfBtn);
    createSelfBtn.click();

    const fNameInp = $("#firstName");
    fNameInp.waitForDisplayed(15000);
    let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let fName = Array(10).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
    fNameInp.addValue(fName);

    const lNameInp = $("#lastName");
    lNameInp.waitForDisplayed(15000);
    let lName = Array(10).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
    lNameInp.addValue(lName);

    const mailInp = $("#username");
    mailInp.waitForDisplayed(15000);
    let mail = Array(14).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
    mailInp.addValue(mail);

    const passwd = $("input[name='Passwd']");
    const confirmPasswd = $("input[name='ConfirmPasswd']");
    let pass = Array(12).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
    pass += "!";
    passwd.waitForDisplayed(15000);
    passwd.addValue(pass);
    confirmPasswd.waitForDisplayed(15000);
    confirmPasswd.addValue(pass);
    browser.pause(5000);

    const next = $("#accountDetailsNext");
    next.waitForClickable(15000);
    next.click();
    browser.pause(4000);

    const heading = $("h1#headingText > span");
    assert.strictEqual(heading.getText(),"Подтвердите номер телефона");

    browser.pause(1000);
  });
  
});
