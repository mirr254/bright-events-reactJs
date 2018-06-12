import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './LoginPage'

Enzyme.configure({ adapter: new Adapter() });

describe('Renders all components', () =>{
    const wrapper = shallow(<Login /> )
  
    it('should have a br tag', ()=> {
        
        expect(wrapper.find('br').length).toBe(1);
    })

    describe('Full Login page mount', ()=>{
        const mountAll = mount(<Login />)

        console.log("Login ", mountAll.debug());
        it('Has 2 labels', ()=>{
            expect( mountAll.find('label').length).toBe(2)
        })
        it('Has transition class', ()=>{
            expect( mountAll.find('TransitionGroup').length).toBe(2)
        })
        it('Has Input ardonment', ()=>{
            expect( mountAll.find('InputAdornment').length).toBe(2)
        })
    })
   
})