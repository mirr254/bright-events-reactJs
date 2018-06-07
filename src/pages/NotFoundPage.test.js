import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFoundPage from './NotFoundPage';

Enzyme.configure({ adapter: new Adapter() });

describe('Login form component', () =>{
    const props = {
      
    };

    it('should have a div class named not-found', ()=> {
        const wrapper = shallow(<NotFoundPage />);
        expect(wrapper.find('.not-found').length).toBe(1);
    })
})