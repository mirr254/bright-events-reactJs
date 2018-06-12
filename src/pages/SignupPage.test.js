import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Register from './SignupPage';

Enzyme.configure({ adapter: new Adapter() });

describe('Renders all components', () =>{
    const wrapper = shallow(<Register /> )
    
    it('should have withStles function', ()=> {
        expect(wrapper.find('WithStyles').length).toBe(2);
    })
    describe('Full mount', ()=>{
        const allMount = mount(<Register />)

        it('expects class signUpForm-margin', ()=>{
            expect( allMount.find('.SignupForm-margin-1').length).toBe(9)
        })
        it('should have form control', ()=>{
            expect( allMount.find('FormControl').length).toBe(3)
        })
        it('should have form AccountCircle', ()=>{
            expect( allMount.find('AccountCircle').length).toBe(1)
        })
        it('should have form Snackbar', ()=>{
            expect( allMount.find('Snackbar').length).toBe(1)
        })
        
    })
   
})