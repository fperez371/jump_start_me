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
import CreateProject from './create_project_form/create_project';
import ProjectShowComponent from './project_show/project_show_component';



const App = () => (
  <div>
    <header>
      <NavBarContainer/>
      <Route exact path="/" component={Categories} />
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/" component={Footer}/>
    </header>
    <Switch>
      <ProtectedRoute exact path="/startProject" component={CreateProject}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route path='/projects/:projectId' component={ProjectShowComponent} />
    </Switch>
  </div>
);

export default App;