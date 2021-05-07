const BASE_URL = 'https://pixabay.com/api';
const KEY = '21510937-25dddef59cfdf7f1b5603f7e9';

export default function apiService(search) {
  return fetch(
    `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${search}&page=1&per_page=12&key=${KEY}`,
  ).then(r => r.json());
}
