import React from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    // This only returns data to the console needs to be changed in the future
    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson)

    login({ name: formJson.email })

    // Logic for where a user is routed to based on whether or not they check the box
    if (formJson.checkbox === "on") {
      navigate("/mentor/account")
    } else {
      navigate("/user/account")
    }
  }

  return (
    <div className="main-container">
      <div className="side-bar">
        <div>
          <img
            src="/img/tech-tutor-pc-nobg.png"
            alt="Tech Tutor Logo"
            className="login-logo"
          />
        </div>
      </div>
      <div className="login-section">
        <div className="login-box">
          <h1>Login</h1>
          <form method="post" onSubmit={handleSubmit}>
            <p>Email</p>
            <label>
              <input className="inputs" type="email" name="email" />
            </label>
            <p>Password</p>
            <label>
              <input className="inputs" type="password" name="password" />
            </label>
            <label htmlFor="mentor-checkbox">
              I am a mentor
              <input type="checkbox" id="mentor-checkbox" name="checkbox" />
              <Link to="/signUp" className="sign-up-link">
                Sign Up
              </Link>
            </label>
            <br />
            <button type="submit" className="inputs">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
