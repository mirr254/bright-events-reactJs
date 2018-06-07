import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './HomePage';

Enzyme.configure({ adapter: new Adapter() });

describe('Login form component', () =>{
    // ensure you're resetting modules before each test
    beforeEach(() => {
        jest.resetModules();
    });
    
    beforeAll( () => {
        const ls = require("../utils/localstorage.js");
        ls.setLocalStorage();
      })

    it('Components mounts without errors', ()=> {
        const wrapper = shallow(<Home /> )
        
        expect(wrapper.find('.root').exists());
        
    })
})