import refs from './js/markup/refs';
import apiService from './js/api/apiService';
import './styles.css';

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const search = e.currentTarget.elements.query.value;

  apiService(search).then(console.log);
}
