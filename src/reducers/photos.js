import {FETCH_PICTURES} from '../actions/index';
const PhotosReducer = function(state=[],action) {
  switch (action.type) {
    case FETCH_PICTURES:
      return [action.payload.data, ...state];
  }
  return state;
}
export default PhotosReducer
