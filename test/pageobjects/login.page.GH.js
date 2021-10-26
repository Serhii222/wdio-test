const Page = require('./main.page.GH');

class LoginPage extends Page{
    get signUpBtn () { return $('[action="/signup"] button[type=submit]') }
    get continueBtn () { return $('[action="/signup"] #email-container [type=button]') }
    get emailInput () { return $('#user_email') }

}

module.exports = new LoginPage();