import data from '../menu.json';
import useTemplate from '../templates/food-service.hbs';
import obj from './fetch-articles';
import updateArticlesMarkup from './update-markup';
import refs from './refs';

let markup = useTemplate(data);

document.querySelector('.js-menu').insertAdjacentHTML('afterbegin', markup);

const loadMoreBtn = {
  duringTheLoading() {
    refs.loadMoreBtn.classList.remove('is-hidden');
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreLable.textContent = 'Завантажуємо...';
  },

  afterLoading() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreLable.textContent = 'Показати більше';
    refs.loadMoreBtnSpinner.classList.add('is-hidden');
    if (obj.query === '') {
      refs.loadMoreBtn.classList.add('is-hidden');
    }
  },
};

refs.searchForm.addEventListener('submit', heandlerForInput);
refs.loadMoreBtn.addEventListener('click', fecthArticles);
function fecthArticles() {
  loadMoreBtn.duringTheLoading();

  obj
    .fecthArticles()
    .then(articles => {
      updateArticlesMarkup(articles);
      scrollAfterLoading();
    })
    .finally(() => {
      loadMoreBtn.afterLoading();
    });
}
function heandlerForInput(event) {
  event.preventDefault();
  obj.resetPage();
  const form = event.currentTarget.elements.search;
  obj.query = form.value;
  clearArticleContainer();
  fecthArticles();
}
function clearArticleContainer() {
  refs.listRender.innerHTML = '';
}
function scrollAfterLoading() {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}
