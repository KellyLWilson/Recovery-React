import React, { useState, useEffect, useRef } from 'react';
import Nav from './nav.js';
import axios from 'axios';
import Home from './home.js';
import Meeting from './meeting.js';
import MeetingInfo from './meetinginfo.js';
import TypePage from './typepage.js';
import CountyInfo from './countyinfo.js';
import Centers from './centers.js';
import Resources from './resources.js';
import Search from './search.js';
import Login from './login.js';
import Register from './register.js'

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
  const [meetings, setMeetings] = useState([]);



  useEffect(() => {


    axios.get('http://127.0.0.1:8000/api/meetings')
      .then(response => setMeetings(response.data))
      .catch(error => console.log(error))







  }, []);


  const [meetingPage, setMeetingPage] = useState(0)
  const [typePage, setTypePage] = useState("")
  const [countyPage, setCountyPage] = useState(0)
  console.log(meetings, typePage)
  return (

    <>
      <Router>
        <div>
          <ul>
            <li className="black">
              <Link to="/">Home</Link>
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
              <Link to="/Login">Register to Create an Account or Login to Your Account</Link>
            </li>
          </ul>

          <hr />


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Meeting">
              <Meeting setMeetingPage={setMeetingPage} setCountyPage={setCountyPage} meetings={meetings} />
            </Route>
            <Route path="/Resources">
              <Resources />
            </Route>
            <Route path="/centers">
              <Centers />
            </Route>
            <Route path="/MeetingInfo">
              <MeetingInfo setTypePage={setTypePage} meetingPage={meetingPage} meetings={meetings} />
            </Route>
            <Route path="/TypePage">
              <TypePage typePage={typePage} meetings={meetings} />
            </Route>
            <Route path="/CountyInfo">
              <CountyInfo countyPage={countyPage} meetings={meetings} />
            </Route>
            <Route path="/Login">
              <Login  meetings={meetings} />
            </Route>
            <Route path="/Register">
              <Register  meetings={meetings} />
            </Route>
            

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;




