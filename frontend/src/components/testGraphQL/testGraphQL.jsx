import React, { useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request'

const client = new GraphQLClient('http://localhost:5000')

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const GET_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      posts {
        id
        title
        content
      }
    }
  }
`;

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

const TestGraphQL = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [deleteUserId, setDeleteUserId] = useState('');
  
    const handleCreateUser = async () => {
      const variables = { name, email };
      try {
        await client.request(CREATE_USER_MUTATION, variables);
        setName('');
        setEmail('');
      } catch (error) {
        console.error(error);
        alert(error.response.errors[0].message);
      }
    };
  
    const handleGetUsers = async () => {
      const data = await client.request(GET_USERS_QUERY);
      setUsers(data.users);
    };

    const handleDeleteUser = async () => {
        const variables = { id: parseInt(deleteUserId, 10) };
        try {
          await client.request(DELETE_USER_MUTATION, variables);
          setDeleteUserId('');
          handleGetUsers(); // Refresh the user list after deletion
        } catch (error) {
          console.error(error);
          alert(error.response.errors[0].message);
        }
    };

    return (
      <div>
        <h1>Create User</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleCreateUser}>Create User</button>
  
        <h1>Users</h1>
        <button onClick={handleGetUsers}>Get Users</button>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
        <h1>Delete User</h1>
      <input
        type="text"
        placeholder="User ID"
        value={deleteUserId}
        onChange={(e) => setDeleteUserId(e.target.value)}
      />
      <button onClick={handleDeleteUser}>Delete User</button>
      </div>
    );
}

export default TestGraphQL