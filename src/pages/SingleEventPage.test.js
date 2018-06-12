import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EventViewCard from './SingleEventPage';

Enzyme.configure({ adapter: new Adapter() });

describe('Renders all components', () =>{
    const wrapper = shallow(<EventViewCard /> )
    
    it('should have a class named EventViewCard', ()=> {
        
        expect(wrapper.find('EventViewCard').length).toBe(1);
    })
   
})