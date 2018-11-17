import { render } from 'lit-html';
import { template } from './main-view.template';

export class MainView extends HTMLElement {

    appTitle: string;

    constructor() {
        super();
    }

    // The browser fires the connectedCallback function when the custom-element is added to the DOM
    public connectedCallback() {
        this.appTitle = 'Craig and Jesses\' amazing TODO app';
        this.render();
    }

    private render() {
        // Here we are calling the render function of lit-html and passing the template we imported at the top of the page to render.
        // We pass 'this' so that properties of this class are available for the template literal used inside of the template function
        render(template(this), this);
    }

}