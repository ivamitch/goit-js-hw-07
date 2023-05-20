import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const ulLink = document.querySelector('.gallery')
ulLink.insertAdjacentHTML('beforeend', createImageInGallry(galleryItems))

function createImageInGallry (galleryItems) {
    return galleryItems.map(
        ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
        </li>`,
    ).join('')
}

// Реалізація делегування на ul.gallery і отримання url великого зображення.

ulLink.addEventListener('click', onClick)

function onClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return
    }


    const instance  = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600">`
        );

    instance.show();

    // Закриття модального вікна при натисканні Escape

    ulLink.addEventListener('keydown', closeBigImage);

  function closeBigImage(event) {
    if (event.code === 'Escape') {
      instance.close(ulLink.removeEventListener('keydown', closeBigImage));
    }
  }
}



