import React from 'react';
// import Route from 'react-router-dom/Route';
import { BrowserRouter, Route } from "react-router-dom";
import Switch from 'react-router-dom/Switch';
import Home from './common/containers/App';
import SignIn from "./common/components/SignIn";
import requireAuth from "./common/components/auth/requireAuth";
import { connect } from "react-redux";
import { fetchUser } from "./common/actions";


const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
  </BrowserRouter>
);

export default connect(null, { fetchUser })(App);
