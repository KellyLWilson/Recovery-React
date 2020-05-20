import React, { useState, useEffect, userLogin } from 'react';
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [info, setInfo] = useState('');
    // const [regInfo, setRegInfo] = useState('');
    const [activeTab, setActiveTab] = useState('register');
    const [loggedIn, setLoggedIn] = useState(false);


    const userRegister = (e) => {
        e.preventDefault();
        const regInfo = {
            name: name,
            email: email,
            password: password,
            // confirmPassword: confirmPassword
        }
        axios.post('http://127.0.0.1:8000/api/register', regInfo)
            .then(response => {
                // setRegInfo(response.data.data)
                console.log(response.data)
                // set loggedIn=true
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
        <div className="row">
            <div className="col-4">
            </div>
            <div className="col-2  p-3 m-3 text-white border border-dark" id="logregBtn">
                <ul className="nav nav-pills nav-fill ">
                    <li className="nav-item ">
                        <a className={activeTab === "login" ? "active" : ''} href="/login"
                            onClick={() => setActiveTab('login')}>Login</a>
                    </li>
                </ul>
            </div>
            <div className="col-2  p-3 m-3 text-white border border-dark" id="logregBtn">
                <ul className="nav nav-pills nav-fill ">
                    <li className="nav-item ">
                        <a className={activeTab === "register" ? "active" : ''} href="/register"
                            onClick={() => setActiveTab('register')}>Register</a>
                    </li>
                </ul>
            </div>
            <div className="col-4">
            </div>
        </div>

        <div className="row">
            <div className="col-10 offset-1">
                <form onSubmit={userRegister}>
                    <div className="form-group" id="Register">
                        <label for="exampleInputEmail1">Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className="name" value={name}
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"></input>
                    </div>

                    <div className="form-group" id="Email">
                        <label form="exampleInputEmail1">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="email" value={email}
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group">
                        <label form="exampleInputPassword1">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="password" value={password} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                   
                    <button type="submit" className="btn btn-secondary">Register</button>
                </form>
            </div>
        </div>
</>
)
}