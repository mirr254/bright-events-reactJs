import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthService from './AuthService';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

Enzyme.configure({ adapter: new Adapter() });

describe('Get all the methods working here', () =>{


    const auth = new AuthService();
    let mock = new MockAdapter(axios)
    
    it('calls login and gets a token', ()=> {
        auth.login('shammir','12345678')
        .then(function ok (res) {
          
        })
        .catch(function fail (error) {
          console.log(error)
        })
        
    })
    it('calls loggedIn to be true', ()=>{
      const logged = auth.loggedIn();
      expect(logged).toBe(false)
      
    })
    it('checks if token is expired', () =>{
      const exp = auth.isTokenExpired('hbjhbjbjjsd-hbjhbjhsd-hbjsd')
      expect(exp).toBeFalsy
    })

    it('Gets token from local storage', () =>{
      const token = auth.getToken()
      expect(token).toExist
      
    })
    
    
})