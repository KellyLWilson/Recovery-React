import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './App.css';

export default function Meeting(props) {

  return (

    <div className="container-fluid">
      <table key='id' className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">County</th>
            <th scope="col">Location</th>
            <th scope="col">Day</th>
            <th scope="col">Time</th>
            <th scope="col">Type</th>
          </tr>
        </thead>

        <tbody>
          {props.meetings.map((meeting, index) => (
            <tr>

              {meeting.location.county.map((county, index) =>
                <td>
                  {county.name}
                </td>
              )}

              <td><Link to="MeetingInfo" onClick={() => props.setMeetingPage(meeting.location.id)}>{meeting.location.name}</Link></td>
              <td>{meeting.day}</td>
              <td>{meeting.time}</td>
              <td>{meeting.type}</td>
            </tr>


          ))}
        </tbody>
      </table>
    </div>

  );

}


