export default {
  listRender: document.querySelector('.js-example'),
  searchBtn: document.querySelector('.btnn'),
  searchInput: document.querySelector('input[name="search"]'),
  searchForm: document.querySelector('.form-search'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
  loadMoreLable: document.querySelector(
    'button[data-action="load-more"]>.label',
  ),
  loadMoreBtnSpinner: document.querySelector(
    'button[data-action="load-more"] > .spinner',
  ),
};
