import cardListTpl from '../templates/card-list';

const cardListContainer = document.querySelector('.js-gallery');

export const clearInterface = function() {
   cardListContainer.innerHTML = '';
}

export const renderPhotoCardList = function (photos) {
   const cardListMarkup = cardListTpl(photos);
   cardListContainer.insertAdjacentHTML('beforeend', cardListMarkup);
}