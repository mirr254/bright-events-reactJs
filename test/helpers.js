// importing the expect function from the chai assertion library
//to be used globally
import Enzyme, { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export { mount, render, shallow };
export default Enzyme;