import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/client/App';
import PhoneListComponent from '../../src/client/containers/phones/list/PhoneListContainer';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

it('renders one <PhoneListComponent /> component', () => {
  wrapped = shallow(<App />);
  expect(wrapped.find(PhoneListComponent).length).toEqual(1);
});

it('renders an `.App`', () => {
  wrapped = shallow(<App />);
  expect(wrapped.find('.App').length).toEqual(1);
});

it('renders an `.App-header`', () => {
  wrapped = shallow(<App />);
  expect(wrapped.find('.App-header').length).toEqual(1);
});

it('renders an `.App-title`', () => {
  wrapped = shallow(<App />);
  expect(wrapped.find('.App-title').length).toEqual(1);
});
