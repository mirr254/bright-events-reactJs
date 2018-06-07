import expect from 'expect';
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import SignupForm from './SignupFormComponent';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Signup form component', () => {
    const props = {
        showPassword : jest.fn(),
        handleChange : jest.fn(),
        handleClick: jest.fn(),

    }
    const enzymeWrapper = mount(<SignupForm {...props} />)

    it('should render 4 input fields and a button', () => {
        
        expect( enzymeWrapper.find('input').length).toBe(4)
        expect( enzymeWrapper.find('Button').length).toBe(1)
    })
    it('should render a button', () => {
        expect( enzymeWrapper.find('Button').length).toBe(1)
    })
    it('should render input labels', () => {
        expect( enzymeWrapper.find('InputLabel').length).toBe(4)
    })
    it('should have signup form', () => {
        expect( enzymeWrapper.find('SignupForm').length).toBe(1)
    })
    it('should have 4 formLabels', () => {
        expect( enzymeWrapper.find('FormLabel').length).toBe(4)
    })

    const signupFormProps = enzymeWrapper.props()

    it('should test prop handleClick exists', () => {
        expect(enzymeWrapper.props)
    })
    
    

});