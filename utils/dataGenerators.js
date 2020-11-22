module.exports = {
    generateRandomString: function(number) {
        let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let randomStr = Array(number).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
        return randomStr;
    },
    generateRandomStringOnlyLetters: function(number) {
        let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randomLet = Array(number).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
        return randomLet;
    },
    generateRandomStringOnlyNumbers: function(number) {
        let s = "0123456789";
        let randomNumb = Array(number).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
        return randomNumb;
    },
    generateRandomStringPassword: function(number) {
        let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let randomPassword = Array(number).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
        randomPassword = randomPassword + "!"
        return randomPassword;
    },
    generateGmail: function(number) {
        let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let randomMail = Array(number).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('') + "@gmail.com";
        return randomMail;
    },
}