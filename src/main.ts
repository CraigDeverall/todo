import { Router } from '@vaadin/router';
import { MainView } from './components/main-view/main-view.component';
import { TodoList } from './components/todo-list/todo-list.component';
import { ModalPopup } from './components/modal/modal-popup.component';

// Define custom-elements
customElements.define('main-view', MainView);
customElements.define('todo-list', TodoList);
customElements.define('modal-popup', ModalPopup);

// Setup the router
const router = new Router(document.body, {});
router.setRoutes([
    { 
        path: '/',
        component: 'main-view',
        children: [
            {
                path: "/",
                component: 'todo-list'
            }
        ], 
    }
]);

