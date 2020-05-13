import React from 'react';
import Meeting from './meeting.js';
import MeetingInfo from './meetinginfo.js';
import Centers from './centers.js';
import Resources from './resources.js';
import Search from './search.js';
import Home from './home.js';

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

export default function Nav() {
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
          <li>
            <Link to="/Search">Search for a Meeting in your County</Link>
          </li>
        </ul>

        <hr />


        <Switch>
          {/* <Route exact path="/Home">
            <Home />
          </Route> */}
          <Route path="/MeetingInfo">
            <MeetingInfo />
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
  );
}