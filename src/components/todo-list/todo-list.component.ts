import { render } from 'lit-html';
import { template } from './todo-list.template';
import { TodoItem } from '../../interfaces';
import { todoListService } from './todo-list.service';
import { store } from '../../state/store';

export class TodoList extends HTMLElement {

    todoList: Array<TodoItem>;
    root: ShadowRoot;
    newTodoModalVisible = false;
    newTodoTitle = '';

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        store.subscribe(() => {
            this.todoList = store.getState().todoList;
        })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        render(template(this), this.root);
    }

    setNewTodoTitle(e: KeyboardEvent, ctrl: TodoList) {
        if (e.keyCode === 13) { 
            ctrl.addNewItem();
            return;
        }
        ctrl.newTodoTitle = (e.target as HTMLInputElement).value;
    }

    openNewTodoModal() {
        this.newTodoModalVisible = true;
        this.render();
    }

    addNewItem() {
        todoListService.addItem(this.newTodoTitle);
        this.newTodoTitle = '';
        this.newTodoModalVisible = false;
        this.render();
    }

    removeItem(item: TodoItem) {
        todoListService.removeItem(item);
        this.render();
    }

    completeItem(item: TodoItem) {
        todoListService.setCompleted(item, true);
        this.render();
    }

    openItem(item: TodoItem) {
        todoListService.setCompleted(item, false);
        this.render();
    }

}