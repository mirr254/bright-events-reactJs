import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from "sinon";

import CustomHeader from './HeaderComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test shallow mount', ()=>{
    it('Expect to have custom header', () => {
        const spy = sinon.spy();
        
        const wrapper = shallow(<CustomHeader />)

        console.log(wrapper.debug() );
        expect( wrapper.find('CustomHeader').length).toBe(1)
        
    })
    it('expects to have classes', () => {
        const wrapper = shallow(<CustomHeader />)
        expect( wrapper.find('classes').length).toBe(0)
    })
})