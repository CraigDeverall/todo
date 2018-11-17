import { render } from 'lit-html';
import { template } from './todo-list.template';
import { TodoItem } from '../../interfaces';
import { todoListService } from '../../services/todo-list.service';

export class TodoList extends HTMLElement {

    todoList: Array<TodoItem>;
    root: ShadowRoot;

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.todoList = todoListService.todoList;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        render(template(this), this.root);
    }

    addNewList() {
        todoListService.addItem('untitled');
        this.render();
    }

    removeItem(item: TodoItem) {
        todoListService.removeItem(item);
        this.render();
    }

}