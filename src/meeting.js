import React, {useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';

export default function Meeting () {
  const [meetings, setMeetings] = useState( [] );
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect( () => {

    const fetchData = async () => {
      const result = await axios.get('http://127.0.0.1:8000/api/meetings');
      setMeetings(result.data.data);
      console.log(result.data.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (<div className="container-fluid">
      {meetings.map((meetings, index) => (




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


