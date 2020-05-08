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
        axios.get('http://127.0.0.1:8000/api/resource')
            .then(response => {
                this.setState({
                    resources: response.data.data
                })

console.log(response);
            })
                    .catch(function (error) {
                        console.log(error);
                    })
                    
    }

    render() {
        
          
            
            return (<div className="container-fluid">
                {this.state.resources.map((resources, index) => (
                    
                

  
  <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Phone</th>
      <th scope="col">Web URL</th>
    </tr>
    </thead>
  <tbody>

    <tr>
      <td>{resources.name}</td>
      <td>{resources.contact}</td>
      <td>{resources.phone}</td>
      <td>{resources.web_url}</td>
    </tr>
  </tbody>
</table>

))}
                </div>
        );
        
    }


    }
export default Resources;
