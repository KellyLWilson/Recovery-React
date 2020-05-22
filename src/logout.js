import React, { useState, useEffect, userLogin } from 'react';
import Landing from './landing.js';
import { Link, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function LogOut(props) {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [info, setInfo] = useState('');
    const [loggedIn, setLoggedIn] = useState('');
    const [auth, setAuth] = useState({});
    const [storageData, setStorageData] = useState({});
    const [url, setUrl] = useState('');
    const history = useHistory();


const logout = (e) => {
        e.preventDefault();
        var auth = JSON.parse(localStorage.getItem("auth"));
        const out = {
            'user':auth.user,
        };
        const config = {
            headers: { 
                'Authorization': 'Bearer ' + auth.token,
                'Accept': 'application/json'
            }
        }
        axios.post('http://127.0.0.1:8000/api/logout', out, config)
            .then(response => {
                console.log(response.data);
                setUrl(url);
                history.push('/Home');
            })
            .catch(error => {
                console.log(error)
            });
        setLoggedIn(false);
        localStorage.clear();
    }

    //var userInfo = JSON.parse(localStorage.getItem("auth"));
    
    return (
            // <>
            //     <span className="navbar-text text-content-right  mr-sm-2 flex-sm-fill">
            //         <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/login'}>Login</Link>
            //     </span>
            //     <span className="navbar-text text-content-right  mr-sm-2 flex-sm-fill">
            //         <Link className="a:hover text-justify-center " id="link" onChange={() => setUrl(url)} to={'/register'}>Register</Link>
            //     </span>
            // </>
            // :
            <span className="navbar-text text-content-right  mr-sm-2 flex-sm-fill">

                {/* <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/'}>Logout</Link> */}
                <form onSubmit={logout}>
                        <button type="submit" className="btn btn-white a:hover" id="link">Logout</button>
                    </form> 
            </span>

    )
}

