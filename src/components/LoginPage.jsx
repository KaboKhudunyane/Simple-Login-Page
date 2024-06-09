import React from "react";
import './App.css';

function LoginPage(){

    return(
    <div className="login-page">
        <div className="login-container">
            <div className="login-form">
            <h1>Simple login Page</h1>
            <h2>Login into your account</h2>
            <form>
                <div className="input-group">
                <label>Email address</label>
                <input type="email" />
                </div>
                <div className="input-group">
                <label>Password</label>
                <input type="password" />
                </div>
                <div className="forgot-password">
                <a href="#">Forgot password?</a>
                </div>
                <button type="submit" className="login-btn">Login now</button>
            </form>
            <div className="signup-option">
                <span>OR</span>
                <button className="signup-btn">Signup now</button>
            </div>
            </div>
        </div>
    </div>
    )
}