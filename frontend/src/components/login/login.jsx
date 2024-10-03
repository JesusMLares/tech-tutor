import React, { useEffect, useState } from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"
import { useCurrentUser } from "../../context/CurrentUser" // Import the useCurrentUser hook
import { GraphQLClient, gql } from "graphql-request"
import { Link } from "react-router-dom"
const client = new GraphQLClient("http://localhost:5000")

const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        firstName
        lastName
        email
        role
        skills
        hourlyRate
        rating
        isAvailable
      }
    }
  }
`
// if (formJson.checkbox === "on") {
//   navigate("/mentor/account")
// } else {
//   navigate("/user/account")
// }

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const { currentUser, updateToken } = useCurrentUser()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = formData
    try {
      const { loginUser } = await client.request(LOGIN_MUTATION, {
        email,
        password,
      })
      updateToken(loginUser.token)
      setFormData({
        email: "",
        password: "",
      })
      navigate("/")
    } catch (error) {
      console.error(error)
      alert("Failed to login")
    }
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleLogout = () => {
    updateToken(null)
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
              <input
                className="inputs"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email"
              />
            </label>
            <p>Password</p>
            <label>
              <input
                className="inputs"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                placeholder="Password"
              />
            </label>
            <Link to="/signUp" className="sign-up-link">
              Sign Up
            </Link>
            <br />
            <button type="submit" className="inputs">
              Log in
            </button>
          </form>
        </div>
      </div>
      {currentUser && (
        <div>
          <h2>Current User</h2>
          <p>ID: {currentUser.id}</p>
          <pre>{JSON.stringify(currentUser, null, 2)}</pre>
          <button onClick={handleLogout}>Clear</button>
        </div>
      )}
    </div>
  )
}

export default Login
