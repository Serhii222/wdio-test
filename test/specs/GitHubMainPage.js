const loginPage = require('../pageobjects/login.page.GH');

describe('SignUp button tests', () => {

    beforeEach(async () => {
        await browser.url('https://github.com/');
    });

    it('Text on SignUp button should be "Sign up for GitHub"', async () => {
        await expect(loginPage.signUpBtn).toHaveText('Sign up for GitHub');

    })

    it('Continue button after SignUp button should be visible', async () => {
        await loginPage.signUpBtn.click();
        await loginPage.continueBtn.waitForDisplayed({ timeout: 7000 });
        await expect(loginPage.continueBtn).toBeDisplayed();
    })

    it('Should be ability to enter an email into the "Email address" input', async () => {
        await loginPage.emailInput.setValue('serhii.ivanchenko@business-class.com');
        await expect(loginPage.emailInput).toHaveValue('serhii.ivanchenko@business-class.com');
    })})
