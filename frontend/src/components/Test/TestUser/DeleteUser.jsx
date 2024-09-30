import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`
const DeleteUser = () => {
  const [userId, setUserId] = useState("")

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
    </div>
  )
}

export default DeleteUser
