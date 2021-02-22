import items from './data/menu.json';
import menuTemplate from '../templates/menu.hbs';

const markup = menuTemplate(items);

const container = document.querySelector('.js-menu');
container.innerHTML = markup;
