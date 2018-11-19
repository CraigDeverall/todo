import * as styles from './modal-popup.styles.scss';

export class ModalPopup extends HTMLElement {

    appTitle: string;
    hasConnected: boolean = false;
    modalElement: HTMLDivElement;

    constructor() {
        super();
    }

    connectedCallback() {
        if (!this.hasConnected) {
            this.modalElement = document.createElement('div');
            const styleTag = document.createElement('style');
            styleTag.innerHTML = styles;
            const modalInner = this.modalElement.attachShadow({mode: 'open'});
            modalInner.appendChild(styleTag);
            Array.from(this.childNodes).forEach(child => {
                modalInner.appendChild(child);
            })
            document.body.appendChild(this.modalElement);
        }
    }

    disconnectedCallback() {
        document.body.removeChild(this.modalElement);
    }

}