
export class MainView extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 'Craig and Jesse\'s TODO app';
    }



}