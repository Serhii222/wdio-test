const PageGitHub = require('./main.page.GitHub');

class LoginPageGitHub extends PageGitHub {
    get signUpBtn () { return $('[action="/signup"] button[type=submit]') }
    get continueBtn () { return $('[action="/signup"] #email-container [type=button]') }
    get emailInput () { return $('#user_email') }

}

module.exports = new LoginPageGitHub();