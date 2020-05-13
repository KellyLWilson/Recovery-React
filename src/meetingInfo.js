import React, {useState, useEffect} from 'react';

export default function MeetingInfo(props) {
  
    return (
      <div className="container-fluid">
  {props.meetings.map((meetings, index) => (




    <table className="table">
      <thead className="thead-dark">
        <tr key={index}>
          <th scope="col">County</th>
          <th scope="col">Location</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>




        <tr>
          <td>{meetings.county}</td>
          <td>{meetings.location}</td>
          <td>{meetings.date}</td>  
          <td>{meetings.time}</td>
          <td>{meetings.type}</td>
        </tr>
      </tbody>
    </table>

  ))}
</div>
);



}