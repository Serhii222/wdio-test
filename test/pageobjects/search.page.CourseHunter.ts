
PageCourseHunter = require('./main.page.CourseHunter');

class SearchPageCourseHunter extends PageCourseHunter{
    get courseListQA () { return $$('article.course') }
}

module.exports = new SearchPageCourseHunter();