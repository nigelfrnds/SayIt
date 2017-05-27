import { combineReducers } from 'redux';
import SoundReducer from './SoundReducer';
import CategoryReducer from './CategoryReducer';

export default combineReducers({
  categories: CategoryReducer,
  soundList: SoundReducer,
});
