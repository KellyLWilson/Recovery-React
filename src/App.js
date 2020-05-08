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

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

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

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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

// You can think of these components as "pages"
// in your app.

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




