const assert = require('assert');
const dataGen = require("../utils/dataGenerators.js");
const gmailActions = require("../GmailLoginActions/action.js");
import Gmail_PO from '../page-objects/Gmail_PO';
import { generateRandomStringPassword } from '../utils/dataGenerators.js';




describe("Test Google register", () => {
  beforeEach(function () {
    browser.setWindowSize(1920, 1080);
    browser.url("./");
  });
  it("Try to go to the page register, generate data for new user and stop on mobile verify page", () => {
    gmailActions.clickButton(Gmail_PO.loginBtn);
    gmailActions.clickButton(Gmail_PO.createAccBtn);
    browser.pause(1000); // Я не знаю что с этой кнопкой - но гарантировать ее нажатие пока удалось только так... 
    gmailActions.clickButtonJS(Gmail_PO.createSelfBtn);

    gmailActions.setField(Gmail_PO.fNameInp, dataGen.generateRandomStringOnlyLetters(14))
    
    gmailActions.setField(Gmail_PO.lNameInp, dataGen.generateRandomStringOnlyLetters(14))

    gmailActions.setField(Gmail_PO.mailInp, "AuTtoFrAmE" + dataGen.generateRandomString(11) )

    let pass = dataGen.generateRandomStringPassword(13);  // пароли должны быть одинаковые для дальнейшего прохождения
    gmailActions.setField(Gmail_PO.passwd, pass)
    gmailActions.setField(Gmail_PO.confirmPasswd, pass)


    gmailActions.clickButton(Gmail_PO.nextBtn);

    browser.pause(1500); // Так как heading у нас существует на обоих страницах по одинаковым адресам, то применение WaitFor не дает результата... 
    assert.strictEqual(Gmail_PO.heading.getText(),"Подтвердите номер телефона");

  });
  it("Try to go to the page register, generate data for new user, but get rejected for short password!", () => {
    gmailActions.clickButton(Gmail_PO.loginBtn);
    gmailActions.clickButton(Gmail_PO.createAccBtn);
    browser.pause(1000);
    gmailActions.clickButtonJS(Gmail_PO.createSelfBtn);

    gmailActions.setField(Gmail_PO.fNameInp, dataGen.generateRandomString(12))
    
    gmailActions.setField(Gmail_PO.lNameInp, dataGen.generateRandomString(12))

    gmailActions.setField(Gmail_PO.mailInp, "AuTtoFrAmE" + dataGen.generateRandomString(11))

    let pass = dataGen.generateRandomStringOnlyNumbers(6);
    gmailActions.setField(Gmail_PO.passwd, pass)
    gmailActions.setField(Gmail_PO.confirmPasswd, pass)
    gmailActions.clickButton(Gmail_PO.nextBtn);

    assert.strictEqual(Gmail_PO.passwdErr.getText(),"Пароль не может быть короче 8 символов");

  });
  it("Try to go to the page register, generate data for new user, but get rejected for invalid confirming password!", () => {
    gmailActions.clickButton(Gmail_PO.loginBtn);
    gmailActions.clickButton(Gmail_PO.createAccBtn);
    browser.pause(1000);
    gmailActions.clickButtonJS(Gmail_PO.createSelfBtn);

    gmailActions.setField(Gmail_PO.fNameInp, dataGen.generateRandomString(12))
    
    gmailActions.setField(Gmail_PO.lNameInp, dataGen.generateRandomString(12))

    gmailActions.setField(Gmail_PO.mailInp, "AuTtoFrAmE" + dataGen.generateRandomString(11))

    
    gmailActions.setField(Gmail_PO.passwd, generateRandomStringPassword(10))
    gmailActions.setField(Gmail_PO.confirmPasswd, generateRandomStringPassword(9))

    gmailActions.clickButton(Gmail_PO.nextBtn);

    assert.strictEqual(Gmail_PO.passwdErr.getText(),"Пароли не совпадают. Повторите попытку.");

  });

  it("Try to go to the page register, generate data for new user, but get rejected for existing email!", () => {
    gmailActions.clickButton(Gmail_PO.loginBtn);
    gmailActions.clickButton(Gmail_PO.createAccBtn);
    browser.pause(1000);
    gmailActions.clickButtonJS(Gmail_PO.createSelfBtn);

    gmailActions.setField(Gmail_PO.fNameInp, dataGen.generateRandomString(12))
    
    gmailActions.setField(Gmail_PO.lNameInp, dataGen.generateRandomString(12))

    gmailActions.setField(Gmail_PO.mailInp, "dfasfdsf")

    let pass = generateRandomStringPassword(10);
    gmailActions.setField(Gmail_PO.passwd, pass)
    gmailActions.setField(Gmail_PO.confirmPasswd, pass)

    gmailActions.clickButton(Gmail_PO.nextBtn);

    assert.strictEqual(Gmail_PO.emailErr.getText(),"Это имя пользователя уже занято. Попробуйте другое.");

  });
  
});




