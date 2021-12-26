
import Faq from './Faq';
import LandingPage from './LandingPage';
import ComingSoon from './ComingSoon';
import Application from './application/Application';
import Dashboard from "./dashboard/Dashboard";
import React from "react"
import { Route, Router } from "react-router-dom"
import createHistory from 'history/createBrowserHistory'
import ProtectedRoute from "./ProtectedRoute";
import Unauthorized from "../Unauthorized";

const history = createHistory();


export default function Routes() {
  return(
    <Router history={history}>
      <Route exact path="/" component={ComingSoon} />
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/faq" component={Faq} />
      <ProtectedRoute path="/dashboard" component={Dashboard}/>
      <ProtectedRoute path="/application" component={Application}/>
      <Route exact path="/unauthorized" component={Unauthorized} />
    </Router>
  )
}
