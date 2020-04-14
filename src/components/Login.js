import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


const Login = props => {
    const [username, setUsername ] = useState('')
    const [password, setPassword ] = useState('')
    let handleChange = event =>{
        console.log(event.target.value)
        if(event.target.name === 'username'){
            setUsername(event.target.value)
        }else if(event.target.name === 'password'){
            setPassword(event.target.value)
        }
    }
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={(event)=>props.handleLoginSubmit(event, username, password)}>
            <input placeholder='username' name='username' value={username} onChange={handleChange} required/>
            <input placeholder='password' name='password' value={password} onChange={handleChange} type='password' required/>
            <button className='btn' type='submit'>Login</button>
        </form>
      </div>
    )
  
}


export default Login;