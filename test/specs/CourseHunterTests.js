const loginPage = require('../pageobjects/login.page.CH');
const searchPage = require('../pageobjects/search.page.CH');

describe('Categories and Search Tests', () => {

    let cookies;

    beforeEach(async () => {
        await browser.url('/');
    });

    afterEach(async () => {
        await browser.deleteCookies();
    });

    it('Items in "Categories" list should have correct url', async () => {
        await loginPage.categoriesDropdown.click();
        for (let element of await loginPage.categoriesList) {
            let hrefElement = await (await element).getAttribute('href');
            await (await element).click();
            let browserUrl = await (await browser).getUrl();
            await expect(browserUrl.endsWith(hrefElement)).toEqual(true);
            await browser.url('/categories');
        }
    })

    it('Search should work correctly', async () => {
        await loginPage.mainSearch.setValue('qa\n');
        for (let element of await searchPage.courseListQA) {
            expect(await (await element.getAttribute('data-name')).includes('QA')).toEqual(true);
        }
    })

    it('Sign In should work correctly', async () => {
        await loginPage.open();
        await loginPage.loginUser('Sasha_semenuk@hotmail.com', 'Sasha_semenuk');
        cookies = await browser.getCookies();
        await expect(loginPage.userAvatar).toHaveAttribute('alt', 'Sasha_semenuk');
    })

    it('Sign Out should work correctly', async () => {
        await loginPage.open();
        await loginPage.loginUser('Sasha_semenuk@hotmail.com', 'Sasha_semenuk');
        await loginPage.userAvatar.click();
        await loginPage.logOutBtn.click()
        await expect (loginPage.signInBtn).toBeExisting();
    })
})
