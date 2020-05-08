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
        axios.get('http://127.0.0.1:8000/api/center')
            .then(response => {
                this.setState({
                    centers: response.data.data
                })

console.log(response);
            })
                    .catch(function (error) {
                        console.log(error);
                    })
                    
    }

    render() {
        
          
            
            return (<div className="container-fluid">
                {this.state.centers.map((centers, index) => (
                    
                

  
  <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">County</th>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Phone</th>
    </tr>
    </thead>
  <tbody>

    <tr>
      <td>{centers.county}</td>
      <td>{centers.name}</td>
      <td>{centers.contact}</td>
      <td>{centers.phone}</td>
    </tr>
  </tbody>
</table>

))}
                </div>
        );
        
    }


    }
export default Centers;
