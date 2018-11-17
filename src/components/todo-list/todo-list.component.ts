import { render } from 'lit-html';
import { template } from './todo-list.template';
import { TodoItem } from '../../interfaces';
import { utilitiesService } from '../../services/utilities.service';

export class TodoList extends HTMLElement {

    todoList: Array<TodoItem>;
    root: ShadowRoot;

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.todoList = [];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        render(template(this), this.root);
    }

    addNewList() {
        const newList: TodoItem = {
            title: 'untitled', 
            id: utilitiesService.getUuid()
        }
        this.todoList.push(newList);
        this.render();
    }

}