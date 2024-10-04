import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import { jwtDecode } from "jwt-decode"; // Correct import for jwt-decode
import { useCurrentUser } from "../../../context/CurrentUser"; // Import the useCurrentUser hook

const client = new GraphQLClient("http://localhost:5000");

const GET_USER_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      role
      imageUrl
    }
  }
`

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
        skills
        hourlyRate
        rating
        isAvailable
      }
    }
  }
`;

const CreateUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "USER",
    skills: "",
    hourlyRate: "",
    rating: "",
    isAvailable: false,
  });
  const [token, setToken] = useState("");
  const [localToken, setLocalToken] = useState(null);
  const { currentUser, updateToken } = useCurrentUser(); // Destructure updateToken from useCurrentUser

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setLocalToken(storedToken);
    }
  }, []);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, role, skills, hourlyRate, rating, isAvailable } = formData;
    const input = {
      firstName,
      lastName,
      email,
      password_hash: password,
      role,
      skills: skills.split(",").map(skill => skill.trim()), // Convert skills to array
      hourlyRate: hourlyRate ? parseFloat(hourlyRate) : null,
      rating: rating ? parseFloat(rating) : null,
      isAvailable, // This will now be a boolean
    };

    try {
      const response = await client.request(CREATE_USER_MUTATION, { input });
      const newToken = response.createUser.token;
      setToken(newToken); // Set the token in state
      updateToken(newToken); // Update the token in local storage and set currentUser
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "USER",
        skills: "",
        hourlyRate: "",
        rating: "",
        isAvailable: false,
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error creating user");
    }
  };

  const decodeToken = () => {
    return jwtDecode(localToken);
  };

 

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleFormChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleFormChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormChange}
          placeholder="Password"
        />
        <select name="role" value={formData.role} onChange={handleFormChange}>
          <option value="USER">User</option>
          <option value="TUTOR">Tutor</option>
          <option value="ADMIN">Admin</option>
        </select>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleFormChange}
          placeholder="Skills (comma separated)"
        />
        <input
          type="number"
          name="hourlyRate"
          value={formData.hourlyRate}
          onChange={handleFormChange}
          placeholder="Hourly Rate"
        />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleFormChange}
          placeholder="Rating"
        />
        <label>
          <input
            type="checkbox"
            name="isAvailable"
            checked={formData.isAvailable}
            onChange={handleFormChange}
          />
          Is Available
        </label>
        <button type="submit">Create</button>
      </form>
      {token && (
        <div>
          <h2>JWT Token</h2>
          <p>{token}</p>
        </div>
      )}
      {localToken && (
        <div>
          <h2>Local Token</h2>
          <p>{localToken}</p>
          <h2>Decoded Token</h2>
          <pre>{JSON.stringify(decodeToken(), null, 2)}</pre>
        </div>
      )}
      {currentUser && (
        <div>
          <h2>Current User</h2>
          <p>ID: {currentUser.id}</p>
          <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CreateUser;