
const loginPageGitHub = require('../pageobjects/login.page.GitHub');

describe('SignUp button tests', () => {

    beforeEach(async () => {
        await browser.url('https://github.com/');
    });

    it('Text on SignUp button should be "Sign up for GitHub"', async (): Promise<void> => {
        await expect(loginPageGitHub.signUpBtn.toHaveText('Sign up for GitHub'));
    })

    it('Continue button after SignUp button should be visible', async () => {
        await loginPageGitHub.signUpBtn.click();
        await loginPageGitHub.continueBtn.waitForDisplayed({ timeout: 7000 });
        await expect(loginPageGitHub.continueBtn).toBeDisplayed();
    })

    it('Should be ability to enter an email into the "Email address" input', async () => {
        await loginPageGitHub.emailInput.setValue('serhii.ivanchenko@business-class.com');
        await expect(loginPageGitHub.emailInput).toHaveValue('serhii.ivanchenko@business-class.com');
    })})

