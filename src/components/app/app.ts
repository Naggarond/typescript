import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    constructor(public controller = new AppController(), public view = new AppView()) {
    }

    start() {
        const sources = document.querySelector('.sources') as HTMLElement;
        if (sources) {
            sources.addEventListener('click', (e: MouseEvent) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        }

        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
