import { render } from 'lit-html';
import { template } from './main-view.template';

export class MainView extends HTMLElement {

    appTitle: string;

    constructor() {
        super();
    }

    connectedCallback() {
        this.appTitle = 'The amazing vanilla TODO application. #webComponentsRule';
        this.render();
    }

    render() {
        render(template(this), this);
    }

}