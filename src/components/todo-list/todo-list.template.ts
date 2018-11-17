import { html, TemplateResult } from 'lit-html';
import { TodoList } from './todo-list.component';
import * as styles from './todo-list.styles.scss';

export function template(ctrl: TodoList): TemplateResult {
  return html`
        <style type="text/css">${styles}</style>
        <div>
          <h2>Things To Do:</h2>
          <button @click="${ctrl.addNewList.bind(ctrl)}">Add New Todo Item</button>
          <div>
            ${ctrl.todoList.map(item => { 
              return html`
              <div>
                <span>${item.title}</span>
                <span>${item.id}</span>
                <button @click="${{
                  handleEvent: () => { ctrl.removeItem(item)} 
                }}">Remove</button>
              </div>
            `})}
          </div>
        </div>
       `;
}
