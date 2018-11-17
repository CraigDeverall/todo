import { render } from 'lit-html';
import { template } from './todo-list.template';
import { TodoItem } from '../../interfaces';
import { utilitiesService } from '../../services/utilities.service';

export class TodoList extends HTMLElement {

    todoLists: Array<TodoItem>;
    root: ShadowRoot;

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.todoLists = [];
        this.render();
    }

    render() {
        render(template(this), this.root);
    }

    addNewList(e:Event) {
        const newList: TodoItem = {
            title: 'untitled', 
            id: utilitiesService.getUuid()
        }
        this.todoLists.push(newList);
        this.render();
    }

}