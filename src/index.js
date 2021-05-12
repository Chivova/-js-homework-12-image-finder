import refs from './js/markup/refs';
import ImageApiService from './js/api/apiService';
import errorNotify from './js/utils/notify';
import galleryList from './templates/gallery-items.hbs';
import 'material-design-icons/iconfont/material-icons.css';
import './styles.css';
import onImgClick from './js/utils/modal';

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.galleryListContainer.addEventListener('click', onImgClick);

const imageApiService = new ImageApiService();

function onSearch(e) {
  e.preventDefault();
  imageApiService.query = e.currentTarget.elements.query.value;

  if (!imageApiService.query) return errorNotify();

  imageApiService.resetPage();
  imageApiService.fetchApiService().then(images => {
    clearImageContainer();

    if (images.length === 0) return errorNotify();

    appendImagesMarkup(images);
    showLoadMoreBtn();
  });
}

function onLoadMore() {
  imageApiService.fetchApiService().then(images => {
    appendImagesMarkup(images);
    scrollToNewImages();
  });
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

function scrollToNewImages() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
