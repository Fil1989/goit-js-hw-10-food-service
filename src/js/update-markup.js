import example from '../templates/some-temp.hbs';
import refs from './refs';

function updateArticlesMarkup(articles) {
  let explmarkup = example(articles);
  refs.listRender.insertAdjacentHTML('beforeend', explmarkup);
}
export default updateArticlesMarkup;
