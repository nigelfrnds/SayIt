import {
  SOUND_LIST_FETCH,
  CATEGORY_LIST_FETCH,
} from './types';

export const soundListFetch = () => {
  return {
    type: SOUND_LIST_FETCH,
    payload: null,
  };
};

export const categoryListFetch = () => {
  return {
    type: CATEGORY_LIST_FETCH,
    payload: null,
  };
};
