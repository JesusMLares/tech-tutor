import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl);

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

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      firstName
      lastName
      email
      role
    }
  }
`

const UpdateUser = () => {
  const [userId, setUserId] = useState("")
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  })

  const handleFetchUser = async () => {
    try {
      const data = await client.request(GET_USER_QUERY, { id: userId })
      setUser(data.user)
      setFormData({
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        role: data.user.role,
      })
    } catch (error) {
      console.error(error)
      alert("Failed to fetch user")
    }
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdateUser = async () => {
    try {
      await client.request(UPDATE_USER_MUTATION, { id: userId, input: formData })
      alert("User updated successfully")
    } catch (error) {
      console.error(error)
      alert("Failed to update user")
    }
  }

  return (
    <div>
      <h1>Update User</h1>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <button onClick={handleFetchUser}>Fetch User</button>
      {user && (
        <form onSubmit={handleUpdateUser}>
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
            type="text"
            name="role"
            value={formData.role}
            onChange={handleFormChange}
            placeholder="Role"
          />
          <button type="submit">Update User</button>
        </form>
      )}
    </div>
  )
}

export default UpdateUser