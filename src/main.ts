import { Router } from '@vaadin/router';
import { MainView } from './components/main-view/main-view.component';
import { TodoList } from './components/todo-list/todo-list.component';

// Define custom-elements
customElements.define('main-view', MainView);
customElements.define('todo-lists', TodoList);

// Setup the router
const router = new Router(document.body, {});
router.setRoutes([
    { 
        path: '/',
        component: 'main-view',
        children: [
            {
                path: "/",
                component: 'todo-lists'
            }
        ], 
    }
]);

// Setup Redux store
