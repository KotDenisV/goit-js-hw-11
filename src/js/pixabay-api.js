
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.images-form');
const imagesList = document.querySelector('.images-container');
const request = document.querySelector('.images-form-input');


form.addEventListener('submit', handleSubmit);
// form.addEventListener('click', handleClick);

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
      imagesList.innerHTML = markup;
    })
    .catch(err => {
      console.log(err);
    });
};


function searchImages(query) {
    const baseUrl = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
    key: '44020863-07a417a47184dc9fb21f180f5',
    q: query,
    lang: 'en',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
    const url = `${baseUrl}?${params}`;

    return fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
    });
}

function imageTemplate(image) {
  return `<img
  src="${image.webformatURL}"
  alt="image"
  width="360"
  height="200"
/>`;
}

function imagesTemplate(arr) {
  if (arr.length === 0) {
        iziToast.show({
          position: 'topRight',
          backgroundColor: '#EF4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FAFAFB',
        });
    }
  return arr.map(imageTemplate).join('');
}

