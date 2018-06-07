import expect from 'expect';
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Login from './LoginPage';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        showPassword : jest.fn()
    }

    const enzymeWrapper = mount(<Login {...props} />)

    return{
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('header', () => {
        it('should render self and subcomponents', () => {
            const {enzymeWrapper} = setup()
            console.log(enzymeWrapper.debug())
        })
    })
})