import { html, TemplateResult } from 'lit-html';
import { MainView } from './main-view.component';
import styles from './main-view.styles.scss';

export function template(ctrl: MainView): TemplateResult {
  return html`
        <style type="text/css">${styles}</style>
        <h1>${ctrl.appTitle}</h1>
       `;
}
