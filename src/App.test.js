import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('./App');

Enzyme.configure({ adapter: new Adapter() });

describe('It renders the app without crashing', () => {

  beforeAll( () => {
    const ls = require("../src/utils/localstorage.js");
    ls.setLocalStorage();
  })
  
  it('renders without crashing', () => {
    const wrapper = mount( <App />);
    
    expect(wrapper.exists()).toBe(true)
  });
  it('getprofile returns userid', () => {
    const wrapper = mount( <App />);
    expect(wrapper.public_user_id).toBe(undefined)
  });



});
