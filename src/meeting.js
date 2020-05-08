import React from 'react';
import './App.css';
import axios from 'axios';

class Meeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meetings: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/meetings')
      .then(response => {
        this.setState({
          meetings: response.data.data
        })

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  render() {



    return (<div className="container-fluid">
      {this.state.meetings.map((meetings, index) => (




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


}
export default Meeting;
