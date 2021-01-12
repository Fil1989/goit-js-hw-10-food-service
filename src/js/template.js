import data from '../menu.json';
import useTemplate from '../templates/food-service.hbs';

let markup = useTemplate(data);

document.querySelector('.js-menu').insertAdjacentHTML('afterbegin', markup);
