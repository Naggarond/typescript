import { NewsResponse, SourcesResponse } from '../controller/controller';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    constructor(public news = new News(), public sources = new Sources()) {
    }

    drawNews(data: NewsResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesResponse) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
