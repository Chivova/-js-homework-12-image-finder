import * as basicLightbox from 'basiclightbox';
import refs from './refs';
import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';

export default function onImgClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery-item-img')) return;
  const imgRef = evt.target;
  refs.largeImg = imgRef.dataset.source;

  const instance = basicLightbox.create(`
 <div class="modal">
 <img src="${refs.largeImg}" >
    </div>
`);

  instance.show();
}
