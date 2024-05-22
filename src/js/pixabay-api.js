const form = document.querySelector('.images-form');
const imagesList = document.querySelector('.images-container');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements.query.value.trim();

  searchImage(query)
    .then(data => {
      const markup = imagesTemplate(data.hits);
      imagesList.innerHTML = markup;
    })
    .catch(err => {
      console.log(err);
    });
});

function searchImage(query) {
    const baseUrl = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
    key: '44020863-07a417a47184dc9fb21f180f5',
    q: query,
    lang: 'en',
  });
    const url = `${baseUrl}?${params}`;

    return fetch(url).then(response => response.json());
}

function imageTemplate(image) {
  return `<img
  src="${image.previewURL}"
  alt="image"
/>`;
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}