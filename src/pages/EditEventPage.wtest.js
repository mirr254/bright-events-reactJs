import React from 'react';
import ReactDOM from 'react-dom';
import   EditEventPage  from './EditEventPage';
import Enzyme, { mount, shallow } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { EVENTS_BASE_URL } from '../utils/ConstVariables';


Enzyme.configure({ adapter: new Adapter() });

describe('It renders the app without crashing', () => {

    const mock = new MockAdapter(axios);
    const data = {
        category: "Educational",
        cost: 10000,
        date: "21/11/19 16:30",
        date_created: "Wed, 21 Mar 2018 22:17:34 GMT",
        description: "Going to be amazing",
        id: 1,
        location: "Pangani",
        name: "PSG tournament",
        public_userid: "b69bc555-92d3-4333-992c-8aee40fb967a"
      }

  
  it('Component renders without crashing', () => {
    mock.onGet(EVENTS_BASE_URL+'/2', data )
      .reply(
        200,
        [
          {
            message: "b69bc555-92d3-4333-992c-8aee40fb967a"
          },
         
        ]
      );

    const wrapper = mount( <EditEventPage />);
    console.log("EDIT event :", wrapper.debug());
    
    
    expect(wrapper.exists()).toBe(true)
  });
  it('getprofile returns logged in user', () => {
    const wrapper = mount( <EditEventPage />);
    expect( wrapper.find('loggedIn').length).toBe(1)
    
  });

  describe('Shallow mount', ()=>{
    const wrapper = mount( <EditEventPage />);
    it('getprofile returns logged in user', () => {
       
        
      });
  })

});