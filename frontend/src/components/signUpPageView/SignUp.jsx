import React from "react";
import "./signUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // This only returns data to the console needs to be changed in the future 
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    // Logic for where a user is routed to based on whether or not they check the box
    if(formJson.checkbox === "on"){
      navigate("/mentor/account");
    } else {
      navigate("/user/account");
    }
  }

  return (
    <div className="signup-main-container">
      <div className="signup-side-bar">
        <div>
          <img src='/img/tech-tutor-pc-nobg.png' alt='Tech Tutor Logo' className='signup-login-logo' />
        </div>
      </div>
      <div className="signup-login-section">
        <div className="signup-login-box">
          <h1>Create Account</h1>
          <form method="post" onSubmit={handleSubmit}>
            <p>Email</p>
            <label>
              <input className="signup-inputs" type="email" name="email" />
            </label>
            <p>Password</p>
            <label>
              <input className="signup-inputs" type="password" name="password" />
            </label>
            <label htmlFor="mentor-checkbox">
              I am a mentor 
              <input type="checkbox" id="mentor-checkbox" name="checkbox" />
            </label>
            <br />
            <button type="submit" className="signup-inputs">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;