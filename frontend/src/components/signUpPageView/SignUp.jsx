import React, { useEffect, useState } from "react";
import "./signUp.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../context/CurrentUser"; // Import the useCurrentUser hook
import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:5000");

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      token
      user {
        id
        firstName
        lastName
        email
        role
        imageUrl
        skills
        hourlyRate
        rating
        isAvailable
      }
    }
  }
`;

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    imageUrl: "",
    skills: "",
    hourlyRate: "",
    rating: "",
    isAvailable: false,
  });

  const imageUrls = [
    "https://img.icons8.com/?size=100&id=ckaioC1qqwCu&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=FiwH5zzc0ZrP&format=png&color=000000",
  ];

  const { currentUser, updateToken } = useCurrentUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      role,
      imageUrl,
      skills,
      hourlyRate,
      rating,
      isAvailable,
    } = formData;
    const input = {
      firstName,
      lastName,
      email,
      password_hash: password,
      role,
      imageUrl,
      skills: skills.split(",").map((skill) => skill.trim()), // Convert skills to array
      hourlyRate: hourlyRate ? parseFloat(hourlyRate) : null,
      rating: rating ? parseFloat(rating) : null,
      isAvailable, // This will now be a boolean
    };

    try {
      const response = await client.request(CREATE_USER_MUTATION, { input });
      const newToken = response.createUser.token;
      updateToken(newToken); // Update the token in local storage and set currentUser
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
        imageUrl: "",
        skills: "",
        hourlyRate: "",
        rating: "",
        isAvailable: false,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      throw new Error("Error creating user");
    }
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogout = () => {
    updateToken(null);
  };

  return (
    <div className="signup-main-container">
      <div className="signup-side-bar">
        <div>
          <img
            src="/img/tech-tutor-pc-nobg.png"
            alt="Tech Tutor Logo"
            className="signup-login-logo"
          />
        </div>
      </div>
      <div className="signup-login-section">
        <div className="signup-login-box">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div
              className={`input-containers ${
                formData.role === "TUTOR" ? "tutor-active" : ""
              }`}
            >
              <div className="user-input-container">
                <label>
                  <input
                    className="user-signup-inputs"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Email"
                  />
                </label>
                <label>
                  <input
                    className="user-signup-inputs"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    placeholder="Password"
                  />
                </label>
                <label>
                  <input
                    className="user-signup-inputs"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    placeholder="First Name"
                  />
                </label>
                <label>
                  <input
                    className="user-signup-inputs"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    placeholder="Last Name"
                  />
                </label>
              </div>
              {formData.role === "TUTOR" && (
                <div className="mentor-input-container">
                  <label>
                    <input
                      className="mentor-signup-inputs"
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleFormChange}
                      placeholder="Skills (comma separated)"
                    />
                  </label>
                  <label>
                    <input
                      className="mentor-signup-inputs"
                      type="number"
                      name="hourlyRate"
                      min="10"
                      max="250"
                      value={formData.hourlyRate}
                      onChange={handleFormChange}
                      placeholder="Hourly Rate"
                    />
                  </label>
                  <label>
                    <input
                      className="mentor-signup-inputs"
                      type="number"
                      name="rating"
                      min="1"
                      max="5"
                      value={formData.rating}
                      onChange={handleFormChange}
                      placeholder="Rating"
                    />
                  </label>
                </div>
              )}
            </div>
            <div className="profile-image-selection">
              <p className="profile-image-header">Select your Profile Image</p>
              {imageUrls.map((url, index) => (
                <label
                  key={index}
                  className={`image-label ${
                    formData.imageUrl === url ? "selected" : ""
                  }`}
                >
                  <input
                    className="radio-input"
                    type="radio"
                    name="imageUrl"
                    value={url}
                    checked={formData.imageUrl === url}
                    onChange={handleFormChange}
                  />
                  <img
                    src={url}
                    alt={`Profile Image ${index + 1}`}
                    className="profile-image"
                  />
                </label>
              ))}
            </div>

            <select
              name="role"
              value={formData.role}
              onChange={handleFormChange}
              className="account-type-dropdown"
            >
              <option value={""}>Please select an option</option>
              <option value="USER">User</option>
              <option value="TUTOR">Tutor</option>
            </select>

            <button type="submit" className="signup-inputs">
              Create Account
            </button>
          </form>
          <Link to="/login" className="sign-up-back-link">
            Sign Up
          </Link>
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
  );
}

export default SignUp;
