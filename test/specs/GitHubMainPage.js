describe('SignUp button tests', () => {
    
    // beforeEach(async ()=> {
    // await browser.url('github.com');
    // })

    it('Text on SignUp button should be "Sign up for GitHub"', async () => {
        const signUpBtn = await $('[action="/signup"] button[type=submit]');
        await expect(signUpBtn).toHaveText('Sign up for GitHub');
    })

    it('Continue button after SignUp button should be visible', async () => {
        const signUpBtn =  await $('[action="/signup"] button[type=submit]');
        await signUpBtn.click();
        continueBtn = await $('[action="/signup"] #email-container [type=button]');
        await continueBtn.waitForDisplayed({ timeout: 7000 });
        await expect(continueBtn).toBeDisplayed();
    })

    it('Should be ability to enter an email into the "Email address" input', async () => {
        const emailInput = await $('#user_email');
        await emailInput.setValue('serhii.ivanchenko@business-class.com');
        await expect(emailInput).toHaveValue('serhii.ivanchenko@business-class.com');
    })

    it('Items in "Категории" list should have correct url', async () => {
       
        await browser.url('coursehunter.net/categories');
        let elementUrlList = await $$('div.categories-list a.categories-item:nth-child(-n+6)');
         for(let element of elementUrlList) {
            let hrefElement = await element.getAttribute('href');
            await (await element).click();
            await expect((await browser.getUrl()).endsWith(await hrefElement)).toEqual(true);
            
            await browser.url('coursehunter.net/categories');
        }
    })})

    it.only('Search should work correctly', async () => {

        await browser.url('coursehunter.net');
        let mainSearchBtn = await $('#mainSearch');
        await mainSearchBtn.click();
        await mainSearchBtn.setValue('qa');
        await browser.keys(['Meta', 'Enter']);
        let courseList = await $$('article.course');
        for(let element of courseList) {
            let nameElement = await element.getAttribute('data-name');
            await expect(await nameElement.includes('QA')).toEqual(true);
        }
    })


