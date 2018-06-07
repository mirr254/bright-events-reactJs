// importing the expect function from the chai assertion library
//to be used globally

import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
//make shallow, render and mount from Enzyme globally accessible. 
//That way,no don’t need to import it explicitly in test files anymore
global.mount = mount;
global.render = render;
global.shallow = shallow;
