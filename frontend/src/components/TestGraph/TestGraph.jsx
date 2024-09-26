import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) { #From resolver
    createUser(input: $input) { 
      # Schema ^
      id
      firstName
      lastName
      email
      role
    }
  }
`

const GET_USERS_QUERY = gql`
  query {
    users {
      id
      firstName
      lastName
      email
      role
      posts {
        id
        title
        content
      }
    }
  }
`

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const TestGraph = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [users, setUsers] = useState([]);

  const handleCreateUser = async () => {
    const input = { firstName, lastName, email, password_hash: password, role };
    try {
      await client.request(CREATE_USER_MUTATION, { input });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setRole("USER");
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.errors?.[0]?.message || "An error occurred";
      alert(errorMessage);
    }
  };

  const handleGetUsers = async () => {
    try {
      const data = await client.request(GET_USERS_QUERY);
      setUsers(data.users);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch users");
    }
  };


  return (
    <div>
      <h1>Create User</h1>
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
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="USER">USER</option>
        <option value="TUTOR">TUTOR</option>
        <option value="ADMIN">ADMIN</option>
      </select>
      <button onClick={handleCreateUser}>Create User</button>
      
      <h2>Users</h2>
      <button onClick={handleGetUsers}>Get Users</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email} ({user.role})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TestGraph
