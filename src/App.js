import React, { useState, useEffect, useRef } from 'react';
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
  const [meetings, setMeetings] = useState([]);
  


  useEffect(() => {


      axios.get('http://127.0.0.1:8000/api/meetings')
      .then(response=>setMeetings(response.data))
      .catch(error=>console.log(error))
      

      

    

    
  }, []);


const   [meetingPage, setMeetingPage] = useState(0)

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
              <Link to="/Search">Search for a Meeting in your County</Link>
            </li>
        
          </ul>

          <hr />


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Meeting">
              <Meeting setMeetingPage={setMeetingPage} meetings={meetings}/>
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
            <Route path="/MeetingInfo">
              <MeetingInfo meetingPage={meetingPage} meetings={meetings}/>
            </Route>
          </Switch>
        </div>
      </Router>




    </>
  );
}

export default App;




