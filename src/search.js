import React, {useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';
import Meeting from './meeting.js';


export default function Search() {
    const [county] = useState( [] );
    const [filterDisplay, setFilterDisplay] = useState();
    
    

const handleChange = e => {
    let oldList = this.state.meetings.map(meetings => {
        return {location: meetings.location.toLowerCase(), date: meetings.date, time: meetings.time, type: meetings.type };
    });

if (e !== "") {
    let newList = [];
    newList = oldList.filter(county =>
        this.state.meetings.location.toLowerCase()
        );
        setFilterDisplay(newList);
} else {
    setFilterDisplay(this.state.meetings);
}
};
        
    return (
        <div>
            <h1>County</h1>
            {/* filter: <input onChange={e => handleChange(e.target.value)}/>
            {filterDisplay.map((this.state.meetings, i) => (
                <div key={i}>
                <li>
                    {this.state.meetings.location} &nbsp;
                    <span>{this.state.meetings.time}</span>
                </li> */}
        </div>
            // ))}
            // </div>
    );
            };
        


