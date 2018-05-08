import {shallow, mount } from "enzyme";
import LoginForm2 from "./LoginFormComponent";

function setup (saving) {
  const props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  }

  return shallow(<Login {...props} />)

  // test if it renders form
  it('renders form, button and fields', () => {
    const Wrapper = setup(false)
    expect(Wrapper.find('TextField').length).toBe(1)
  })
}
