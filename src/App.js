import React, {useState, useEffect, useRef } from 'react';
import Nav from './nav.js';
import axios from 'axios';
import Home from './home.js';
import Meeting from './meeting.js';
import MeetingInfo from './meetinginfo.js';
import Centers from './centers.js';
import Resources from './resources.js';
import Search from './search.js';

import {
  BrowserRouter as Router,
  useHistory,
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (

    <>
    <Router>
    <div>
      <ul>
        <li className="black">
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Meeting">Meeting Locations</Link>
        </li>
        <li>
          <Link to="/Resources">Helpful Resources</Link>
        </li>
        <li>
          <Link to="/centers">Recovery Center Information</Link>
        </li>
        <li>
          <Link to="/Search">Search for a Meeting in your County</Link>
        </li>
      </ul>

      <hr />


      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/Meeting">
          <Meeting />
        </Route>
        <Route path="/Resources">
          <Resources />
        </Route>
        <Route path="/centers">
          <Centers />
        </Route>
        <Route path="/Search">
          <Search />
        </Route>
      </Switch>
    </div>
  </Router>


  

  </>
);
}
  
export default App;




