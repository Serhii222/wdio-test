const Page = require('./main.page.CH');

class SearchPage extends Page{
        get courseListQA () { return $$('article.course') }
}

module.exports = new SearchPage();