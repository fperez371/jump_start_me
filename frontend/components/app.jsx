import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import NavBarContainer from "./nav_bar_container";
import Categories from "./homepage/categories";
import Footer from "./homepage/footer";
import SignUpFormContainer from "./signup_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomePageContainer from "./homepage/homepage_container";
import CreateProject from "./create_project_form/create_project";
import ProjectShowComponent from "./project_show/project_show_component";
import CreateRewardComponent from "./rewards/create_reward_component";
import CatIndex from "./project_index_by_category/category_index";
import Modal from "./modal/modal";
import UserProfile from "./user_profile/user_profile";

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
      <Route exact path="/" component={Categories} />
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/Arts" component={CatIndex} />
      <Route path="/Comics&Illustration" component={CatIndex} />
      <Route path="/Design&Tech" component={CatIndex} />
      <Route path="/Film" component={CatIndex} />
      <Route path="/Food&Craft" component={CatIndex} />
      <Route path="/Games" component={CatIndex} />
      <Route path="/Music" component={CatIndex} />
      <Route path="/Publishing" component={CatIndex} />
      <Route exact path="/" component={Footer} />
    </header>
    <Switch>
      <ProtectedRoute exact path="/myProfile" component={UserProfile} />
      <ProtectedRoute exact path="/startProject" component={CreateProject} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route
        exact
        path="/projects/:projectId/rewards"
        component={CreateRewardComponent}
      />
      <Route
        exact
        path="/projects/:projectId"
        component={ProjectShowComponent}
      />
    </Switch>
  </div>
);

export default App;
