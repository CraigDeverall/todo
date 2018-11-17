import { Router } from '@vaadin/router';
import { MainView } from './components/main-view/main-view.component';

// define custom-elements
customElements.define('main-view', MainView);

// create and append the root DOM node for the router
const outletElement = document.createElement('div');
outletElement.id = 'outlet';
document.body.appendChild(outletElement);

// setup the router
const router = new Router(outletElement, {});
router.setRoutes([
    { path: '/', component: 'main-view' }
]);

