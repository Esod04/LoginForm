import React, { useState } from "react";
export const Login = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');

    const handleSubmit = (eve) => {
        eve.preventDefault();
        console.log(email);
    }

    return (
       
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value= {email} onChange={(eve) => setEmail(eve.target.value)} type="email" placeholder="mailid@xyz.com" id="email" name="email" required/>
            <label htmlFor="password"> &#x1F511;</label>
            <input value= {password} onChange={(eve) => setPass(eve.target.value)} type="password" placeholder="password" id="email" name="email" required />
            <button>Log In</button>
        </form>
        <a href="/signup" style={{'text-decoration':'none'}}><button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button></a>
        </div>
        
    );
}