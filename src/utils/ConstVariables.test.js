import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {EVENTS_BASE_URL, AUTH_BASE_URL} from './ConstVariables'

Enzyme.configure({ adapter: new Adapter() });

describe('MAke sure these urls exist', () =>{
    it('checks the events base url',()=>{

        expect(EVENTS_BASE_URL).toEqual('https://brighter-event.herokuapp.com/api/v1/events')
    });
    it('Checks the auth base url', ()=>{
        expect(AUTH_BASE_URL).toEqual('https://brighter-event.herokuapp.com/api/v1/auth')
    })

})
