import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './HomePage';

Enzyme.configure({ adapter: new Adapter() });

describe('Login form component', () =>{
    const props = {
        events: {}
      };
    beforeAll( () => {
        const ls = require("../utils/localstorage.js");
        ls.setLocalStorage();
      })

})