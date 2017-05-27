import {
  CATEGORY_LIST_FETCH,
} from '../actions/types';

import categories from './CategoryList.json';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => categories;
