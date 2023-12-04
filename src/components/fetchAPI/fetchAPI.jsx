const API_KEY = '40207022-3419c72a3f77a39584f0c1b04';
const BASE_URL = 'https://pixabay.com/api';

export class ImageApi {
  page = 1;
  searchQuery = '';

  incrementpage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  set query(value) {
    this.searchQuery = value;
  }

  async fetchImageOrPhoto() {
    const res = await fetch(
      `${BASE_URL}/?q=${this.searchQuery}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=30`,
    );
    const { hits } = await res.json();
    return hits;
  }
}


