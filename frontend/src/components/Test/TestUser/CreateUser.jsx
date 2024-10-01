import React, { useState } from "react";
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
      setToken(response.createUser.token); // Set the token in state
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
    </div>
  );
};

export default CreateUser;