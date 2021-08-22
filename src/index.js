import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import './sass/main.scss';

import ApiService from './js/apiService';
import { renderPhotoCardList, clearInterface } from './js/renderImageCard';
import openImgInModal from './js/openImgInModal';

const refs = {
   searchForm: document.getElementById('search-form'),
   gallery: document.querySelector('.js-gallery'),
   loadMoreBtn: document.querySelector('[data-action="load-more"]')
}

const pixabayApi = new ApiService({
   per_page: '12',
   page: 1,
});

pixabayApi.fetchImages().then(photos => {
   renderPhotoCardList(photos);
});

refs.searchForm.addEventListener('submit', onImageSearchSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);onLoadMoreBtnClick

function onImageSearchSubmit(e) {
   e.preventDefault();

   const query = e.currentTarget.elements.query.value;

   pixabayApi.params.q = query;
   clearInterface('.js-gallery');
   pixabayApi.fetchImages().then(renderPhotoCardList);
}

function onLoadMoreBtnClick() {
   pixabayApi.incrementPage();
   pixabayApi.fetchImages().then(renderPhotoCardList);   
}

openImgInModal(refs.gallery);