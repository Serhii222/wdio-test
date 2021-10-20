describe('Categories and Search Tests', () => {

    beforeEach(async () => {
        await browser.url('/');
    });

    it('Items in "Категории" list should have correct url', async () => {
        await $('span.main-header-link').click();
        let elementUrlList = await $$('div.categories-list a.categories-item:nth-child(-n+6)');
        for (let element of elementUrlList) {
            let hrefElement = await element.getAttribute('href');
            await (await element).click();
            await expect((await browser.getUrl()).endsWith(await hrefElement)).toEqual(true);
            await browser.url('/categories');
        }
    })

    it('Search should work correctly', async () => {
        await $('#mainSearch').setValue('qa\n');

        let courseList = await $$('article.course');
        for (let element of courseList) {
            expect(await (await element.getAttribute('data-name')).includes('QA')).toEqual(true);
        }
    })
})
