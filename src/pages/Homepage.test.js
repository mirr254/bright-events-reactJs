import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './HomePage'

Enzyme.configure({ adapter: new Adapter() });

describe('Renders all components', () =>{
    const wrapper = shallow(<Home /> )
  
    it('should have a home tag', ()=> {
        expect( wrapper.find('Home').length).toBe(1)
    })
})