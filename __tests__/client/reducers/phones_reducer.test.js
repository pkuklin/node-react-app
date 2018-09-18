import phonesReducer from '../../../src/client/reducers/phones';
import { FETCH_PHONES, PHONE_SELECTED, PHONE_DESELECTED } from '../../../src/client/actions/actionTypes';

const mockedPhoneData = {
  id: 1,
  name: 'Iphone 7',
  description: 'Apple iPhone 7 smartphone was launched in September 2016. The phone comes with a 4.70-inch '
    + 'touchscreen display with a resolution of 750 pixels by 1334 pixels at a PPI of 326 pixels per inch. '
    + 'Apple iPhone 7 price in India starts from Rs. 39,489.',
  imgUrl: 'images/iphone7.png',
  screen: '4.70',
  resolution: '750x1334 pixels',
  ram: '2GB',
  storage: '32GB'
};

const initialState = {
  list: [],
  activePhone: null
};

it('handles actions of type FETCH_PHONES', () => {
  const action = {
    type: FETCH_PHONES,
    payload: [mockedPhoneData]
  };

  const newState = phonesReducer(initialState, action);

  expect(newState).toEqual({ list: [mockedPhoneData], activePhone: null });
});

it('handles actions of type PHONE_SELECTED', () => {
  const action = {
    type: PHONE_SELECTED,
    payload: mockedPhoneData
  };

  const newState = phonesReducer(initialState, action);

  expect(newState).toEqual({ list: [], activePhone: mockedPhoneData });
});

it('handles actions of type PHONE_DESELECTED', () => {
  const action = {
    type: PHONE_DESELECTED
  };

  const newState = phonesReducer({ list: [], activePhone: mockedPhoneData }, action);

  expect(newState).toEqual({ list: [], activePhone: null });
});
