import { render } from 'lit-html';
import { template } from './main-view.template';

export class MainView extends HTMLElement {

    appTitle: string;

    constructor() {
        super();
    }

    connectedCallback() {
        this.appTitle = 'Craig and Jesses\' amazing TODO app';
        this.render();
    }

    render() {
        render(template(this), this);
    }

}