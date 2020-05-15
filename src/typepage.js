import React, { useState, useEffect, useRef } from 'react';
import './App.css';


export default function TypePage(props) {

    console.log(props)
    console.log(props.typePage)
    const specificMeeting = props.meetings.find(item => item.type === props.typePage)
    console.log(specificMeeting)
    return (
        <div className="container-fluid">

            <h2 className="text-center">Available {specificMeeting ? specificMeeting.type : null} Meetings</h2>
            <table key='id' className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Location</th>
                        <th scope="col">Day</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.meetings.filter(item => item.type === props.typePage).map((meeting, index) => (
                        <tr>
                            <td>{meeting.day}</td>
                            <td>{meeting.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );

}


