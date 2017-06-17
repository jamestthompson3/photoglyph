import axios from 'axios';

const queryString = require('query-string');
const query = queryString.stringify({
    method: 'flickr.photos.search',
    api_key: "06d880ae1de1bd8027f1c803a4588d79",
    tag_mode: 'all',
    per_page: 100,
    page: 1,
    format: 'json',
    media: 'photos',
    sort: 'interestingness-desc',
    nojsoncallback: 1
});
export const FETCH_PICTURES ='FETCH_PICTURES'
export function fetchPictures() {
  const request = axios.get(`https://api.flickr.com/services/rest/?${query}`);
  return {
    type: FETCH_PICTURES,
    payload: request
  };
}
