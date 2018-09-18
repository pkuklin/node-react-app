import * as types from '../actions/actionTypes';

const initialState = {
  list: [],
  activePhone: null
};

const phones = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PHONES:
      return { ...state, list: action.payload };
    case types.PHONE_SELECTED:
      return { ...state, activePhone: action.payload };
    case types.PHONE_DESELECTED:
      return { ...state, activePhone: null };
    default:
      return { ...state };
  }
};

export default phones;
