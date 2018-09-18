import * as types from './actionTypes';

export const fetchPhonesData = phones => ({
  type: types.FETCH_PHONES,
  payload: phones
});

export const selectPhone = phone => ({
  type: types.PHONE_SELECTED,
  payload: phone
});

export const deselectPhone = () => ({
  type: types.PHONE_DESELECTED
});
