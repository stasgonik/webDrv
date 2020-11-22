var config = require('../config/main-config')
var dataGenerators = require('../utils/dataGenerators')
import Gmail_PO from '../page-objects/Gmail_PO';

describe("Test contact us page on webdriveruni", () => {
    beforeEach(function() {
      ContactUs_PO.open();
      browser.setWindowSize(1800, 1200);
      //browser.url("./");

      //const pageDetails = browser.getUrlAndTitle();
      //expect(pageDetails.url).to.contain('webdriveruniversity');
      //expect(pageDetails.title).to.contain('WebDriverUniversity');
    });

    it("Submit all information via the contact us page", () => {
        //const contactUsButton = $('//h1[text()="CONTACT US"]/..');
        //contactUsButton.click();
        //browser.waitAndClick('//h1[text()="CONTACT US"]/..');
        //browser.switchWindow('WebDriver | Contact Us');


        //const firstName = $('//*[@name="first_name"]');
        //const lastName = $('//*[@name="last_name"]');
        //const emailAddress = $('//*[@name="email"]');
        //const message = $('//*[@name="message"]');
        //const submitButton = $('//*[@value="SUBMIT"]');

        //firstName.setValue(config.firstName);
        //lastName.setValue(config.lastName);
        //emailAddress.setValue('joe_Blogs121@mail.com');
        //message.setValue('Hello how are you?');

        //browser.waitAndSendkeys('//*[@name="first_name"]', config.firstName);
        //browser.waitAndSendkeys('//*[@name="last_name"]', config.lastName);
        //browser.waitAndSendkeys('//*[@name="email"]', dataGenerators.generateRandomEmailAddress());
        //browser.waitAndSendkeys('//*[@name="message"]', dataGenerators.generateRandomString());
        ContactUs_PO.firstName.setValue(config.firstName);
        ContactUs_PO.lastName.setValue(config.lastName);
        ContactUs_PO.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
        ContactUs_PO.comments.setValue(dataGenerators.generateRandomString());

        //browser.waitAndClick('//*[@value="SUBMIT"]');
        ContactUs_PO.submit();
        //submitButton.click();

        //const contactUsSubmissionDetails = browser.getUrlAndTitle();
        expect(ContactUs_PO.successfulContactHeader.getText()).to.contain('Thank You for your Message!');
    }); 
  });