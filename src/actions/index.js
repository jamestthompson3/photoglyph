import axios from 'axios';

const queryString = require('query-string');
const query = queryString.stringify({
    method: 'flickr.photosets.getPhotos',
    api_key: "06d880ae1de1bd8027f1c803a4588d79",
    photoset_id: "72157672490359490",
    user_id: "136276171@N05",
    per_page: 100,
    page: 1,
    privacy_filter: [1,2,3,4,5],
    format: 'json',
    media: 'photos',
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

export function setList() {
    const subreddits = [
    'roomporn',
    'abandonedporn',
    'colorizedhistory',
    'pics',
    'mildlyinteresting',
    'foodporn',
    'wallpapers',
    'itookapicture',
    'oldschoolcool'
    ]
    return {
        type: 'RANDOM_LIST',
        list: subreddits
    }
}
