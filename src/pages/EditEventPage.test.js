import React from 'react';
import ReactDOM from 'react-dom';
import   EditEventPage  from './EditEventPage';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('./EditEventPage');

Enzyme.configure({ adapter: new Adapter() });

describe('It renders the app without crashing', () => {

  beforeAll( () => {
    const ls = require("../utils/localstorage.js");
    ls.setLocalStorage();
  })
  
  it('Component renders without crashing', () => {
    const wrapper = mount( <EditEventPage />);
    
    expect(wrapper.exists()).toBe(true)
  });
  it('getprofile returns logged in user', () => {
    const wrapper = mount( <EditEventPage />);
    expect( wrapper.find('loggedIn').length).toBe(1)
    
  });

  describe('Shallow mount', ()=>{
    const wrapper = mount( <EditEventPage />);
    it('getprofile returns logged in user', () => {
        
       console.log( wrapper.debug());
       
        
      });
  })

});