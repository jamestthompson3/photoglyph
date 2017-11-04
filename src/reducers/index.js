import { combineReducers } from 'redux'
import PhotosReducer from './photos'
import randomReducer from './random'
const rootReducer = combineReducers({
  photos: PhotosReducer,
  randomList: randomReducer
})

export default rootReducer
