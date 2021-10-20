describe('SignUp button tests', () => {
    

    it('Text on SignUp button should be "Sign up for GitHub"', async () => {
        await browser.url('https://github.com/');
        const signUpBtn = await $('[action="/signup"] button[type=submit]');
        await expect(signUpBtn).toHaveText('Sign up for GitHub');
    })

    it('Continue button after SignUp button should be visible', async () => {
        await browser.url('https://github.com/');
        const signUpBtn =  await $('[action="/signup"] button[type=submit]');
        await signUpBtn.click();
        continueBtn = await $('[action="/signup"] #email-container [type=button]');
        await continueBtn.waitForDisplayed({ timeout: 7000 });
        await expect(continueBtn).toBeDisplayed();
    })

    it('Should be ability to enter an email into the "Email address" input', async () => {
        await browser.url('https://github.com/');
        const emailInput = await $('#user_email');
        await emailInput.setValue('serhii.ivanchenko@business-class.com');
        await expect(emailInput).toHaveValue('serhii.ivanchenko@business-class.com');
    })})
