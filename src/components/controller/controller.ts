import AppLoader from './appLoader';

import { NewsEntity } from "./../view/news/news"
import { SourceEntity } from "./../view/sources/sources"

export interface NewsResponse {
    articles?: NewsEntity[];
}

export interface SourcesResponse {
    sources?: SourceEntity[];
}

class AppController extends AppLoader {
    getSources(callback: (data: SourcesResponse) => void) {
        super.getResp<SourcesResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback: (data: NewsResponse) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId !== null) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<NewsResponse>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (!target.parentNode) {
                break;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
