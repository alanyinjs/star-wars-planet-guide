import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from '../components/AboutPage';
import { shallow } from 'enzyme';

describe('<AboutPage />', () => {
  it('should render App', () => {
    const wrapper = shallow(<AboutPage />);
    console.log(wrapper.debug());
  })
})