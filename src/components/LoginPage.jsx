import React from "react";
import '../css/LoginPage.css';

function LoginPage() {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        console.log('Form submitted');
    };

    return (
        <div className="login-page">

            <div className="login-container">

                <div className="login-form">

                    <h2>Login into your account</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>

                        <div className="forgot-password">
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit" className="login-btn">Login now</button>
                    </form>

                    <div className="signup-option">
                        <span>OR</span>
                        <button type="button" className="signup-btn">Signup now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
