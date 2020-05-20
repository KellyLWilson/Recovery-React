import React, { useState, useEffect, useRef } from 'react';
import './App.css';


export default function CountyInfo(props) {

  console.log(props)
  console.log(props.countyPage)
  const specificCounty = props.meetings.find(item => item.county.id === props.countyPage)
  return (
    <div className="container-fluid">

      <h2 className="text-center">Available Meetings In {specificCounty ? specificCounty.name : null} County</h2>
      <table key='id' className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Day</th>
            <th scope="col">Time</th>
            <th scope="col">Type</th>
            
          </tr>
        </thead>
        <tbody>
        {props.meetings.filter(item => item.county.id === props.countyPage).map((meeting, index) => (
            <tr>
              <td>{meeting.mlocation}</td>
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


