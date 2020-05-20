import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Landing(props) {

    const [url, setUrl] = useState('');

    var userInfo = JSON.parse(localStorage.getItem("auth"));

console.log(userInfo);
    return (
        <div className="container-fluid">
        <h1>Welcome {userInfo.user.name} </h1>
        </div>
    )
}
