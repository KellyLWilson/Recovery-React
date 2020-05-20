import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './App.css';


export default function MeetingInfo(props) {


  

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
          {props.meetings.filter(item => item.id === props.meetingPage).map((meeting, index) => (
            <tr>
            
              <td key={index}>{meeting.day}</td>
              <td>{meeting.time}</td>
              <td><Link to="/TypePage" onClick={() => props.setTypePage(meeting.type)}>{meeting.type}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );

}


