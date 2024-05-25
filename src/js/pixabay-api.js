


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

export { searchImages }
