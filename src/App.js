import React from 'react';
import Meeting from './meeting.js';
import MeetingInfo from './meetinginfo.js';
import Centers from './centers.js';
import Resources from './resources.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function nav() {
  return (
    <Router>
      <div>
        <ul>
          <li className="black">
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/MeetingInfo">Meeting Locations</Link>
          </li>
          <li>
            <Link to="/Resources">Helpful Resources</Link>
          </li>
          <li>
            <Link to="/centers">Recovery Center Information</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/MeetingInfo">
            <MeetingInfo />
          </Route>
          <Route path="/Resources">
            <Resources />
          </Route>
          <Route path="/centers">
            <Centers />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}


function Home() {
  return (
    <div className="container-fluid">
      <div className="jumbotron-fluid">
      <div className="image-holder">
    <h1 className="display-4" text='center'>Recovery Resource Finder</h1>
    <img src="./images/hope.jpeg" alt="hope"></img>
    </div>
    </div>
    </div>
   
  );
}




