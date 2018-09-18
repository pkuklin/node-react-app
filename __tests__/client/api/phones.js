import PhonesApi from '../../../src/client/api/phones';

const mockedPhoneData = [{
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
}];

describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('makes a call to server to `/api/phones`', () => {
    fetch.mockResponseOnce(JSON.stringify(mockedPhoneData));
  });

  PhonesApi.getPhones().then((res) => {
    expect(res).toEqual(mockedPhoneData);
  });

  expect(fetch.mock.calls.length).toEqual(1);
  expect(fetch.mock.calls[0][0]).toEqual('/api/phones');
});
