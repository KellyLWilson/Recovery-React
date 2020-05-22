import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Landing(props) {

    const [url, setUrl] = useState('');

    var userInfo = JSON.parse(localStorage.getItem("auth"));
    //var lsMeet = JSON.parse(localStorage.getItem("save"));

    //console.log(userInfo);
    //console.log(props);
    //console.log(lsMeet)
    //console.log(savedMeeting);

    const [saves, setSaves] = useState([]);
    //const [umeet, setUmeet] = useState([]);
    useEffect(() => {

        axios.get('https://bootcamp-finalproject.uc.r.appspot.com/api/user_meetings')
            .then(response => setSaves(response.data))
            .catch(error => console.log(error))
        //console.log(response);

    }, []);

    console.log(saves);
    //console.log(props.meetings);
    //console.log(userInfo.user.id)
   

    var umeet = saves.filter(item => item.user_id === userInfo.user.id);

    
    console.log(umeet)

    var stuff = props.meetings.filter((item ) => {
        return !umeet.every((save) => {
            return item.id != save.meeting_id;
        })
    });

    console.log(stuff);

    //const getSaves = saves.meetings.find(item => item.meeting_id === props.setLanding);


    
    return (
        <div className="container-fluid">

            <h2 className="text-center">Welcome {userInfo.user.name} </h2>
            <h5 className="text-center">Your Saved Meetings</h5> <table key='id' className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Location</th>
                        <th scope="col">Day</th>
                        <th scope="col">Time</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {stuff.map((meeting, index) => (



                        <tr>
                            <td key={index}>{meeting.mlocation}</td>
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







