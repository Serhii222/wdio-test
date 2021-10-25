const Page = require('./main.page.CH');

class LoginPage extends Page{
    get inputEmail () { return $('input[type="email"]') }
    get inputPassword () { return $('input[type="password"]') }
    get btnSubmit () { return $('button[type="submit"]') }

    async loginUser (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('sign-in');
    }
}

module.exports = new LoginPage();