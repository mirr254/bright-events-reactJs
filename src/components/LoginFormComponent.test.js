import React from 'react';
import Login from "./LoginFormComponent";
import { mount } from '../../test/helpers';

describe('Login form component', () =>{
  const props = {
    course: {},
    saving: () => {},
    errors: {},
    onSave: () => {},
    onChange: () => {},
    handleChange: () => {}
  };

  it(' should have a button', () => {
    const wrapper = mount(<Login {...props} />);
    expect(wrapper.find('Button').length).toBe(1)
  });

  it(' should have 2 input fields', () => {
    const wrapper = mount(<Login {...props} />)
    expect(wrapper.find('input').length).toBe(2)
  });

  it(' should have 2 form input labels', () => {
    const wrapper = mount(<Login {...props} />)
    expect(wrapper.find('InputLabel').length).toBe(2)
  });

});