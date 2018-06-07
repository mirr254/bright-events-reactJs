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
  describe('Login form component', () =>{

    it(' should have a button', () => {
      const Wrapper = setup(false)
      expect(Wrapper.find('Button').length).toBe(1)
    });

    it(' should have 2 input fields', () => {
      const Wrapper = setup(false)
      expect(Wrapper.find('input').length).toBe(2)
    });

  });

}
