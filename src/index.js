import { render } from './utils/render-functions.js';
import App from './components/app.js';

const app = document.getElementById('app');
render(new App(), app);

