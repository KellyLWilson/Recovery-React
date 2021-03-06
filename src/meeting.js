import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './App.css';

export default function Meeting(props) {

  

  return (

    <div className="container-fluid">
      <h5 className="text-center" >Click on the County Name to Search for Meetings by County</h5>
      <h5 className="text-center">Click on the Meeting Location for Dates and Times</h5>

      <table key='id' className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">County</th>
            <th scope="col">Location</th>
            {/* <th scope="col">Day</th>
            <th scope="col">Time</th>
            <th scope="col">Type</th> */}
          </tr>
        </thead>

        <tbody>
          {props.meetings.map((meeting, index) => 
            meeting && index === undefined ? (
            <p>{props.error}</p>
          ) : (
            <React.Fragment key={index}>
            <tr>

              
              

                <td>
                  <Link to="CountyInfo" onClick={() => props.setCountyPage(meeting.county.id)}>{meeting.county.name}</Link></td>
                  
               
          
                  
          <td><Link to="MeetingInfo" onClick={() => props.setMeetingPage(meeting.mlocation)}>{meeting.mlocation}</Link></td>
          {/* <td>{meeting.day}</td>
              <td>{meeting.time}</td>
              <td>{meeting.type}</td> */}
            </tr>
          
</React.Fragment>
          ))}
        </tbody>
      </table>
    </div >

  )

}


