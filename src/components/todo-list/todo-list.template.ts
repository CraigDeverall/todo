import { html, TemplateResult } from 'lit-html';
import { TodoList } from './todo-list.component';
import * as styles from './todo-list.styles.scss';

export function template(ctrl: TodoList): TemplateResult {
  return html`
        <style type="text/css">${styles}</style>
        <div>
          <h2>Things To Do:</h2>
          <button @click="${ctrl.openNewTodoModal.bind(ctrl)}">Add New Todo Item</button>
        <div>
            ${
    ctrl.todoList ?
      ctrl.todoList
        .sort((a, b) => {
          if (!a.completed && b.completed) {
            return -1;
          }
          if (a.completed && !b.completed) {
            return 1;
          }
          return 0;
        })
        .map(item => {
          return html`
              <div class="${ item.completed ? 'completed' : 'not-completed'}">
                <span>${item.title}</span>
                <span>${item.id}</span>
                ${ item.completed
              ? html`
                  <button @click="${{
                  handleEvent: () => { ctrl.openItem(item) }
                }}">Re-Open</button>
                  `
              : html`  
                  <button @click="${{
                  handleEvent: () => { ctrl.completeItem(item) }
                }}">Complete</button>
                `

            }
                <button @click="${{
              handleEvent: () => { ctrl.removeItem(item) }
            }}">Remove</button>
              </div>
            `}) : ''}
          </div>
        </div>

            <!-- New TODO Modal -->
            ${ ctrl.newTodoModalVisible
      ? html`<modal-popup>
          <h3>Add a new TODO:</h3>
          <input 
          autofocus
           type='text'
          .value="${ctrl.newTodoTitle}" 
          @keyup="${ (e: any) => { ctrl.setNewTodoTitle(e, ctrl) }}" />
          <button @click="${ ctrl.addNewItem.bind(ctrl)}">Add</button>
        </modal-popup>`
      : ''}
       `;
}
