import { Router } from '@vaadin/router';
import { MainView } from './components/main-view/main-view.component';

// define custom-elements
customElements.define('main-view', MainView);

// setup the router
const router = new Router(document.body, {});
router.setRoutes([
    { path: '/', component: 'main-view' }
]);