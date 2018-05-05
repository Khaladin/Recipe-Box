import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar';

test('renders without crashing', () => {
  shallow(<Navbar />);
});

test('renders with navbar collapsed', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper.find('div.collapse'));
});

test('renders with navbar open when state changes', () => {
  const wrapper = shallow(<Navbar />);
  const nodeLength = wrapper.find('div.collapse.navbar-collapse').length;
  expect(nodeLength).toBe(1);

  wrapper.find('button').simulate('click');

  const noNode = wrapper.find('div.collapse.navbar-collapse').length;
  expect(noNode).toBe(0);
});
