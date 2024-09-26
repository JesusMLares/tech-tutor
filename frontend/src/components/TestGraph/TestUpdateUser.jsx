import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const GET_USER_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      role
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

const UpdateUserForm = () => {
  const [userId, setUserId] = useState("")
  const [user, setUser] = useState(null)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  const handleFetchUser = async () => {
    try {
      const data = await client.request(GET_USER_QUERY, { id: userId })
      setUser(data.user)
      setFirstName(data.user.firstName)
      setLastName(data.user.lastName)
      setEmail(data.user.email)
      setRole(data.user.role)
    } catch (error) {
      console.error(error)
      alert("Failed to fetch user")
    }
  }

  const handleUpdateUser = async () => {
    const input = { firstName, lastName, email, role }
    try {
      await client.request(UPDATE_USER_MUTATION, { id: userId, input })
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
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFetchUser}>Fetch User</button>
      {user && (
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button onClick={handleUpdateUser}>Update User</button>
        </div>
      )}
    </div>
  )
}

export default UpdateUserForm
