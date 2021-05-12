import * as basicLightbox from 'basiclightbox';
import refs from '../markup/refs';
const instance = basicLightbox.create(`
asedads
`);

// instance.show()

export default function onImgClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery-item-img')) return;
  const imgRef = evt.target;
  refs.largeImg.src = imgRef.dataset.source;

  instance.show();
}
