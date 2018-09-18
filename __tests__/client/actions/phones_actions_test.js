import configureStore from 'redux-mock-store';
import * as phoneActions from '../../../src/client/actions/phones';
import { FETCH_PHONES, PHONE_SELECTED, PHONE_DESELECTED } from '../../../src/client/actions/actionTypes';

const mockStore = configureStore();
const store = mockStore();

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


beforeEach(() => {
  store.clearActions();
});

describe('fetchPhones', () => {
  it('has the correct type', () => {
    const action = phoneActions.fetchPhonesData();
    expect(action.type).toEqual(FETCH_PHONES);
  });

  it('has the correct payload', () => {
    const mockData = [mockedPhoneData];
    const action = phoneActions.fetchPhonesData(mockData);
    expect(action.payload).toEqual(mockData);
  });
});

describe('selectPhone', () => {
  it('has the correct type', () => {
    const action = phoneActions.selectPhone();
    expect(action.type).toEqual(PHONE_SELECTED);
  });

  it('has the correct payload', () => {
    const mockData = mockedPhoneData;
    const action = phoneActions.selectPhone(mockData);
    expect(action.payload).toEqual(mockData);
  });
});

describe('deselectPhone', () => {
  it('has the correct type', () => {
    const action = phoneActions.deselectPhone();
    expect(action.type).toEqual(PHONE_DESELECTED);
  });
});
