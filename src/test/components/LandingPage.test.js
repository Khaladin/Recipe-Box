import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../components/LandingPage';

test('renders without crashing', () => {
  shallow(<LandingPage />);
});
