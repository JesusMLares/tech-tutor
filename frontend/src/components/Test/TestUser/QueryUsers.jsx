import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL
const client = new GraphQLClient(graphqlUrl);

const GET_USERS_QUERY = gql`
  query {
    users {
      id
      firstName
      lastName
      email
      role
    }
  }
`

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

const QueryUsers = () => {
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState("")
  const [user, setUser] = useState(null)

  const handleFetchUsers = async () => {
    try {
      const data = await client.request(GET_USERS_QUERY)
      setUsers(data.users)
    } catch (error) {
      console.error(error)
      alert("Failed to fetch users")
    }
  }

  const handleFetchUser = async (e) => {
    try {
      e.preventDefault()
      const data = await client.request(GET_USER_QUERY, { id: userId });
      console.log('Fetched user data:', data); // Log the response
  
      if (data && data.user) {
        setUser({
          id: data.user.id,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
          role: data.user.role,
        });
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      alert('Failed to fetch user');
    }
  };

  const handleFormChange = (e) => {
    setUserId(e.target.value)
  }

  return (
    <div>
      <h1>Query Users</h1>
      <button onClick={handleFetchUsers}>Fetch Users</button>
      <ul>
        {users.map((data) => (
          <li key={data.id}>
            {data.id} : {data.firstName} - {data.lastName} - {data.email} - {data.role}
          </li>
        ))}
      </ul>
      <h1>Query User</h1>
      <form onSubmit={handleFetchUser}>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={handleFormChange}
          placeholder="User ID"
        />
        <button type="submit">Fetch User</button>
      </form>
      {user && (
        <div>
          <h2>
            {user.id} {user.firstName} {user.lastName} - {user.email} - {user.role}
          </h2>
        </div>
      )}
    </div>
  )
}

export default QueryUsers