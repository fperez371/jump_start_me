import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from './nav_bar_container';
import Categories from './homepage/categories';
import Footer from './homepage/footer';
import SignUpFormContainer from './signup_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePageContainer from './homepage/homepage_container';



const App = () => (
  <div>
    <header>
      <NavBarContainer/>
      <Route exact path="/" component={Categories} />
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/" component={Footer}/>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;