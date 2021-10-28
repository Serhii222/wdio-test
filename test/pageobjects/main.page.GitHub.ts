/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class PageGitHub {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open (path : string) {
        return browser.url(`https://github.com/${path}`)
    }
}

// module.exports = new PageGitHub();