import React, { useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient("http://localhost:5000");

const QUERY_USER_WITH_APPOINTMENTS = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      role
      imageUrl
      userAppointments {
        id
        date
        tutorId
        postId
      }
      tutorAppointments {
        id
        date
        userId
        postId
      }
    }
  }
`;

const TestQueryAppointment = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchUserWithAppointments = async () => {
    try {
      const variables = { id: userId };
      const data = await client.request(QUERY_USER_WITH_APPOINTMENTS, variables);
      setUser(data.user);
    } catch (error) {
      console.error('Error fetching user and appointments:', error);
      setError(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFetchUserWithAppointments}>Fetch User and Appointments</button>
      {error && <p>Error: {error.message}</p>}
      {user && (
        <div>
          <h2>{user.firstName} {user.lastName}</h2>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <h3>User Appointments</h3>
          <ul>
            {user.userAppointments.map((appointment) => (
              <li key={appointment.id}>
                <p>ID: {appointment.id}</p>
                <p>Date: {appointment.date}</p>
                <p>Tutor ID: {appointment.tutorId}</p>
                <p>Post ID: {appointment.postId}</p>
              </li>
            ))}
          </ul>
          <h3>Tutor Appointments</h3>
          <ul>
            {user.tutorAppointments.map((appointment) => (
              <li key={appointment.id}>
                <p>ID: {appointment.id}</p>
                <p>Date: {appointment.date}</p>
                <p>User ID: {appointment.userId}</p>
                <p>Post ID: {appointment.postId}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestQueryAppointment;