import React from "react";

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.nameInput.current.value;
    const password = e.target.password.value;
    const secondPassword = e.target.repeatPassword.value;
    console.log(name);
    console.log(password);
    console.log(secondPassword);
  }

  render() {
    return (
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <h2>Register</h2>
        <div className="registration__hint">* required field</div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
            ref={this.nameInput}
            defaultValue="Mack"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
          />
          <div className="registration__hint">
            6 to 72 characters, must include a number
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input
            type="password"
            className="registration__control"
            name="repeatPassword"
            id="repeatPassword"
          />
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button type="submit" className="registration__button">
            Save
          </button>
        </div>
      </form>
    );
  }
}
