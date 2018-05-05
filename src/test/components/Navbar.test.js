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
  expect(wrapper.find('div.collapse' )).to.have.length(1);
  expect(wrapper.find('div.navbar-collapse').not('div.collapse')).to.have.length(1);
  wrapper.setState({
      navCollapsed: false
  });

});
