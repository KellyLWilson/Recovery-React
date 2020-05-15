import React, { useState, useEffect, useRef } from 'react';
import './App.css';


export default function CountyInfo(props) {

  console.log(props)
  console.log(props.countyPage)
  const specificCounty = props.meetings.find(item => item.location.county_id === props.meetingPage)
  return (
    <div className="container-fluid">

      <h2 className="text-center">Available Meetings In {specificCounty ? specificCounty.location.county.name : null} County</h2>
      <table key='id' className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Time</th>
            <th scope="col">Type</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
        {props.meetings.filter(item => item.location_id === props.meetingPage).map((meeting, index) => (
            <tr>
              <td>{meeting.location}</td>
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


