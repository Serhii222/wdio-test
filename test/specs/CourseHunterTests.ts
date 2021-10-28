import is from "@sindresorhus/is";
import object = is.object;
import array = is.array;

const loginPageCourseHunter = require('../pageobjects/login.page.CourseHunter');
const searchPageCourseHunter = require('../pageobjects/search.page.CourseHunter');

describe('Categories and Search Tests', () => {

    let cookies;

    beforeEach(async () => {
        await browser.url('/');
    });

    afterEach(async () => {
        await browser.deleteCookies();
    });

    it('Items in "Categories" list should have correct url', async () => {
        await loginPageCourseHunter.categoriesDropdown.click();
        for (let element of await loginPageCourseHunter.categoriesList) {
            let hrefElement = await (await element).getAttribute('href');
            await (await element).click();
            let browserUrl = await (await browser).getUrl();
            await expect(browserUrl.endsWith(hrefElement)).toEqual(true);
            await browser.url('/categories');
        }
    })

    it('Search should work correctly', async () => {
        await loginPageCourseHunter.mainSearch.setValue('qa\n');
        for (let element of await searchPageCourseHunter.courseListQA) {
            expect(await (await element.getAttribute('data-name')).includes('QA')).toEqual(true);
        }
    })

    it('Sign In should work correctly', async () => {
        await loginPageCourseHunter.open();
        await loginPageCourseHunter.loginUser('Sasha_semenuk@hotmail.com', 'Sasha_semenuk');
        cookies = await browser.getCookies();
        await expect(loginPageCourseHunter.userAvatar).toHaveAttribute('alt', 'Sasha_semenuk');
    })

    it('Sign Out should work correctly', async () => {
        await loginPageCourseHunter.open();
        await loginPageCourseHunter.loginUser('Sasha_semenuk@hotmail.com', 'Sasha_semenuk');
        await loginPageCourseHunter.userAvatar.click();
        await loginPageCourseHunter.logOutBtn.click()
        await expect (loginPageCourseHunter.signInBtn).toBeExisting();
    })
})
