import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const ulLink = document.querySelector(".gallery");
ulLink.insertAdjacentHTML("beforeend", createImageInGallry(galleryItems));

function createImageInGallry(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `).join("");
}

const myGallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 300,
});
