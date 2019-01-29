import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      return null;
    }

    return (
      <ul className="fieldset-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>

    );
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }


  render() {
    return (
      <>
        <div className="signup-form">
          <div className="signup-header" >
            Have an account?<a className="signup-switch-login" href="/#/login"> Log in</a>
          </div>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div>
              <div className='signup-text'> {this.props.formType} </div>
              <br />
              <fieldset>
                {this.renderErrors()}
              </fieldset>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="signup-input"
                placeholder="Name"
              />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder="email"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                placeholder="password"
              />
              <button className="signup-submit" type="submit" value="Create Account">Create Account</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SignUpForm;