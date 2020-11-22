import Base_PO from './Base_PO'

class Gmail_PO extends Base_PO {

    get loginBtn() {
        return $("#gb_70");;
    }

    get createAccBtn() {
        return $("#ow311");;
    }

    get createSelfBtn() {
        return $("//div[text()='Для себя']");
    }

    // get createSelfBtn() {
    //     return $("[jsname='RZzeR']");
    // }
    
    get fNameInp() {
        return $("#firstName");
    }

    get lNameInp() {
        return $("#lastName");
    }

    get mailInp() {
        return $("#username");
    }

    get passwd() {
        return $("input[name='Passwd']");
    }

    get confirmPasswd() {
        return $("input[name='ConfirmPasswd']");
    }

    get emailErr() {
        return $(".o6cuMc");
    }

    get passwdErr() {
        return $("[jscontroller='MZKEPb'] [jsname='B34EJ'] span");
    }

    get nextBtn() {
        return $("#accountDetailsNext");
    }

    get heading() {
        return $("h1#headingText > span");
    }
  

}
export default new Gmail_PO()