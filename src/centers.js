import React from 'react';
import './App.css';
import axios from 'axios';

class Centers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      centers: [],
    };
  }

  componentDidMount() {
    axios.get('https://bootcamp-finalproject.uc.r.appspot.com/api/centers')
      .then(response => {
        this.setState({
          centers: response.data
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
          </tr>
        </thead>
        <tbody>
          {this.state.centers.map((center, index) => (

            <tr>
              <td>{center.county}</td>
              <td>{center.name}</td>
              <td>{center.contact}</td>
              <td>{center.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }


}
export default Centers;
