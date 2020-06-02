import React, { useState, useEffect, useRef } from 'react';
import { Link, Switch, useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from 'axios';


export default function MeetingInfo(props) {

  const history = useHistory();
  const auth = JSON.parse(localStorage.getItem('auth'));

  const saveMeeting = async (meet) => {
    const save = {
      meeting_id: meet,
      user_id: auth.user.id,
      headers: {
        'Authorization': 'Bearer ' + auth.token,
        'Accept': 'application/json' 
      }
    };

    //console.log(meet)
    //console.log(save)
      
  await axios.post('https://bootcamp-finalproject.uc.r.appspot.com/api/user_meetings', save)
        .then(response => {
          window.localStorage.setItem("save", JSON.stringify(response.data));
          //setRegInfo(response.data);
          console.log(response.data);
          //let storageData = JSON.stringify(response.data);
          //localStorage.setItem('auth', storageData);
          history.push('/Landing');
          
        })
        .catch (error => {
          console.log( error)
        })
  
//console.log(storageData);
  }
  

  console.log(props)
  console.log(props.meetingPage)
  const specificMeeting = props.meetings.find(item => item.location_id === props.meetingPage)
  return (
    <div className="container-fluid">

      <h2 className="text-center">Available Meetings At:   {specificMeeting ? specificMeeting.location.name : null}</h2>
      <h5 className="text-center">Click Meeting Type to Only show Desired Type</h5>
      <table key='id' className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Time</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {props.meetings.filter(item => item.mlocation === props.meetingPage).map((meeting, index) => (
            <tr>
            
              <td key={index}>{meeting.day}</td>
              <td>{meeting.time}</td>
              <td><Link to="/TypePage" onClick={() => props.setTypePage(meeting.type)}>{meeting.type}</Link></td>
              <td><Button><Link to="/Home" size="sm" onClick={() => saveMeeting(meeting.id)}>Save Meeting</Link></Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );

}
