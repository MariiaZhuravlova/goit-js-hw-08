// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const listGallaryEl = document.querySelector(".gallery");
const galleryCard = ({ preview, original, description} ) => {
    const galleryWrapper = document.createElement('a');
    galleryWrapper.innerHTML = 
    ` <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}"  
        alt="${description}"/>
     </a>`;
return galleryWrapper.firstElementChild;
};

const galleryCards = galleryItems.map(gallery => galleryCard(gallery));
listGallaryEl.append(...galleryCards);

    const galleryHendler = (event) => 
    {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    };
listGallaryEl.addEventListener('click', galleryHendler);
const galleryLightBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });