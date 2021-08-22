import * as basicLightbox from 'basiclightbox';

export default function openImgInModal(gallery) {
   gallery.addEventListener('click', (e) => {
      if(e.target.nodeName !== 'IMG') {
         return;
      }

      const largeImageURL = e.target.dataset.largeImg;

      const lightbox = basicLightbox.create(`
         <img src="${largeImageURL}" width="800" height="auto"/>
      `).show();

   });
} 