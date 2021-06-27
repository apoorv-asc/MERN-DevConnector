import React from 'react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFromData] = useState({
        email:'',
        password:''
    });

    const {email, password} = formData;
    const onChange = e =>setFromData({...formData,[e.target.name]:e.target.value})

    const onSubmit = async e =>{
        e.preventDefault();
        console.log("Success");
    }

    return (
        <>
        <h1 className="large text-primary">Sign IN</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
        <form className="form" onSubmit={e=>onSubmit(e)}>
          <div className="form-group">
            <input 
                type="email"
                placeholder="Email Address" 
                name="email" 
                value={email}
                onChange={e => onChange(e)} 
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={e => onChange(e)} 
            />
          </div>
          <input 
            type="submit" 
            className="btn btn-primary" 
            value="Register"
        />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">SIGN UP</Link>
        </p>
        </>
    )
}

export default Login
