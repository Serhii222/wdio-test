/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class PageCourseHunter {
    get mainSearch () { return $('#mainSearch') }
    get signInBtn () { return $('a[title="Sign in"]') }
    get logOutBtn () { return $('a[href="https://coursehunter.net/logout"]') }
    get userAvatar () { return $('picture img[alt="Sasha_semenuk"]') }
    get categoriesList () { return $$('div.categories-list a.categories-item:nth-child(-n+6)') }
    get categoriesDropdown () { return $('span.main-header-link') }
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open (path : string) {
        return browser.url(`https://coursehunter.net/${path}`)
    }
}

//module.exports = new PageCourseHunter();