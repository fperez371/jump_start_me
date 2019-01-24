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


  render() {
    return (
      <>
      <div className="signup-header" >
        Have an account? <a className="signup-switch-login" href="/#/login">Log in</a>
      </div>
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
       <div> {this.props.formType} </div>
          <br />
          <div className="signup-form">
            <br />
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
            <br />
            <input className="signup-submit" type="submit" value="Create Account" />
          </div>
        </form>
      </div>
      </>
    );
  }
}

export default SignUpForm;