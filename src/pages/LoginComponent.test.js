import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from './LoginComponent';

function setup(saving) {
    const props = {
        course: {}, saving: saving, errors: {},
        onSave: () => {},
        onChange: () =>{}
    };

    return shallow(<Login {...props} />);

    // test if it renders form
    it('renders form, button and fields', () => {
        const Wrapper = setup(false);
        expect(Wrapper.find('form').length).toBe(1)
    });
}