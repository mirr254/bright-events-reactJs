import React from 'react';
import Footer from './FooterComponent';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer component', () =>{
  const props = {

  };

  it(' should have a Paper', () => {
    const wrapper = mount(<Footer {...props} />);
    expect(wrapper.find('Paper').length).toBe(1)
  });
  it(' should have a Tab', () => {
    const wrapper = mount(<Footer {...props} />);
    expect(wrapper.find('Tabs').length).toBe(1)
  });

});