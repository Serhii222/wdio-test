describe('SignUp button tests', () => {
    
    beforeEach(async ()=> {
       await browser.url('github.com');
    })

    it('Text on SignUp button should be "Sign up for GitHub"', async () => {
        const signUpBtn = await $('[action="/signup"] button[type=submit]');
        await expect(signUpBtn).toHaveText('Sign up for GitHub');
    })

    it('Continue button after SignUp button should be visible', async () => {
        const signUpBtn =  await $('[action="/signup"] button[type=submit]');
        await signUpBtn.click();
        const continueBtn = await $('[action="/signup"] #email-container [type=button]');
        await continueBtn.waitForDisplayed({ timeout: 7000 });
        await expect(continueBtn).toBeDisplayed();
    })

    it('Should be ability to enter an email into the "Email address" input', async () => {
        const emailInput = await $('#user_email');
        await emailInput.setValue('serhii.ivanchenko@business-class.com');
        await expect(emailInput).toHaveValue('serhii.ivanchenko@business-class.com');
    })

});