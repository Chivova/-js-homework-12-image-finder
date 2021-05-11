import refs from './js/markup/refs';
import ImageApiService from './js/api/apiService';
import galleryList from './templates/gallery-items.hbs';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import './styles.css';

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const imageApiService = new ImageApiService();

function onSearch(e) {
  e.preventDefault();
  imageApiService.query = e.currentTarget.elements.query.value;

  if (!imageApiService.query) {
    return console.log('Bad Request');
  }

  imageApiService.resetPage();
  imageApiService.fetchApiService().then(images => {
    clearImageContainer();
    appendImagesMarkup(images);
    showLoadMoreBtn();
  });
}

function onLoadMore() {
  imageApiService.fetchApiService().then(appendImagesMarkup);
}
function appendImagesMarkup(images) {
  refs.galleryListContainer.insertAdjacentHTML(
    'beforeend',
    galleryList(images),
  );
}

function clearImageContainer() {
  refs.galleryListContainer.innerHTML = '';
}

function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('is-active');
}
