import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from "./js/pixabay-api";
import { imageTemplate } from "./js/render-functions";
import { imagesTemplate } from "./js/render-functions";

const form = document.querySelector('.images-form');
const imagesList = document.querySelector('.images-container');
const request = document.querySelector('.images-form-input');
const gallery = document.querySelector('.gallery');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    if (request.value.trim() === '') {
      alert('Please enter a search query');
      return; 
  }

  const query = event.target.elements.query.value.trim();

  searchImages(query)
    .then(data => {
      const markup = imagesTemplate(data.hits);
      gallery.innerHTML = markup;
    })
    .catch(err => {
      console.log(err);
    });
};

let lightbox = new SimpleLightbox('.gallery-image-container a', {
        captionsData: 'alt',
        captionDelay: 250
});
      
