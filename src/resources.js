import React from 'react';
import './App.css';
import axios from 'axios';

class Resources extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/resources')
      .then(response => {
        this.setState({
          resources: response.data
        })

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  render() {

    return (<div className="container-fluid">
      <table key='id' className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">County</th>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Phone</th>
            <th scope="col">Web URL</th>
          </tr>
        </thead>
        <tbody>
          {this.state.resources.map((resource, index) => (

            <tr>
              <td>{resource.county}</td>
              <td>{resource.name}</td>
              <td>{resource.contact}</td>
              <td>{resource.phone}</td>
              <td>{resource.web_url}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
    );
  }
}
export default Resources;
