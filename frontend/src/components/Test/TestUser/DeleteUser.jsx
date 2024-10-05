import React, { useState } from "react"
import { useCurrentUser } from "../../../context/CurrentUser"
import { GraphQLClient, gql } from "graphql-request"

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl);

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`
const DeleteUser = () => {
  const [userId, setUserId] = useState("")
  const { currentUser } = useCurrentUser()

  const handleDeleteUser = async () => {
    try {
      await client.request(DELETE_USER_MUTATION, { id: userId })
      alert("User deleted successfully")
    } catch (error) {
      console.error(error)
      alert("Failed to delete user")
    }
  }

  const handleFormChange = (e) => {
    setUserId(e.target.value)
  }

  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handleDeleteUser}>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={handleFormChange}
          placeholder="User ID"
        />
        <button type="submit">Delete User</button>
      </form>
      {currentUser && (
        <div>
          <h2>Current User Delete Section</h2>
          <p>ID: {currentUser.id}</p>
        </div>
      )}
    </div>
  )
}

export default DeleteUser
