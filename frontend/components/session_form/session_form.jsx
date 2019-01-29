import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    return (
      <fieldset >
        <ul className="fieldset-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </fieldset>
    );
  }


  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          <div>
            <p className="login-text"> {this.props.formType}</p>
            <br />
            {this.renderErrors()}
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Email"
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="password"
            />
            <br />
            <button className="session-submit" type="submit" value="submit">Log me in!</button>
          </div>
          <div>New to JumpStartMe? {this.props.navLink}</div>
          <Link to="/" className="demo-login" onClick={() => this.props.demoLogin()}>Or log in as a guest</Link>
        </form>
      </div>
    );
  }
}

export default SessionForm;