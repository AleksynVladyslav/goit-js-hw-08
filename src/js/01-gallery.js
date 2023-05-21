import SimpleLightbox from 'simplelightbox';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

//создаем функцию возвращающую строку разметки
function createListsItemsMurkup(items) {
  return items
    .map(
      item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`
    )
    .join(' ');
}

//кладем разметку в пременную listsItemsMurkup
const listsItemsMurkup = createListsItemsMurkup(galleryItems);

//Добавляем элементы в DOM
function addListsItemsMurkup() {
  galleryRef.innerHTML = listsItemsMurkup;
}

//вызов функции
addListsItemsMurkup();

// использование бибилиотеки SimpleLightbox
new SimpleLightbox('.gallery .gallery__link', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
