const BASE_URL = 'https://pixabay.com/api';
const KEY = '21510937-25dddef59cfdf7f1b5603f7e9';

export default class imageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchApiService() {
    return fetch(
      `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        if (hits.length === 0) return alert('NO');
        this.page += 1;

        return hits;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
