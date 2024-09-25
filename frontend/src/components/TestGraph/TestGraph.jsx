import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      id
      username
      firstname
      lastname
      email
      role
    }
  }
`

const CREATE_TUTOR_MUTATION = gql`
  mutation CreateTutor($data: CreateTutorInput!) {
    createTutor(data: $data) {
      id
      username
      firstname
      lastname
      email
      role
    }
  }
`

const CREATE_POST_MUTATION = gql`
  mutation CreatePost($data: CreatePostInput!) {
    createPost(data: $data) {
      id
      title
      content
      published
      author {
        id
        username
      }
    }
  }
`

const CREATE_APPOINTMENT_MUTATION = gql`
  mutation CreateAppointment($data: CreateAppointmentInput!) {
    createAppointment(data: $data) {
      id
      user {
        id
        username
      }
      post {
        id
        title
      }
      tutor {
        id
        username
      }
      date
    }
  }
`

const TestGraph = () => {
  const [userData, setUserData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  const [tutorData, setTutorData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    published: false,
    authorId: "",
  })
  const [appointmentData, setAppointmentData] = useState({
    userId: "",
    postId: "",
    tutorId: "",
    date: "",
  })

  const createUser = async () => {
    try {
      const variables = { data: userData }
      const data = await client.request(CREATE_USER_MUTATION, variables)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  const createTutor = async () => {
    try {
      const variables = { data: tutorData }
      const data = await client.request(CREATE_TUTOR_MUTATION, variables)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  const createPost = async () => {
    try {
      const variables = { data: postData }
      const data = await client.request(CREATE_POST_MUTATION, variables)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  const createAppointment = async () => {
    try {
      const variables = { data: appointmentData }
      const data = await client.request(CREATE_APPOINTMENT_MUTATION, variables)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>GraphQL Test</h1>
      <div>
        <h2>Create User</h2>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="First Name"
          value={userData.firstname}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          value={userData.lastname}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button onClick={createUser}>Create User</button>
      </div>
      <div>
        <h2>Create Tutor</h2>
        <input
          type="text"
          placeholder="Username"
          value={tutorData.username}
          onChange={(e) =>
            setTutorData({ ...tutorData, username: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="First Name"
          value={tutorData.firstname}
          onChange={(e) =>
            setTutorData({ ...tutorData, firstname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          value={tutorData.lastname}
          onChange={(e) =>
            setTutorData({ ...tutorData, lastname: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={tutorData.email}
          onChange={(e) =>
            setTutorData({ ...tutorData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={tutorData.password}
          onChange={(e) =>
            setTutorData({ ...tutorData, password: e.target.value })
          }
        />
        <button onClick={createTutor}>Create Tutor</button>
      </div>
      <div>
        <h2>Create Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Content"
          value={postData.content}
          onChange={(e) =>
            setPostData({ ...postData, content: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Author ID"
          value={postData.authorId}
          onChange={(e) =>
            setPostData({ ...postData, authorId: e.target.value })
          }
        />
        <label>
          Published:
          <input
            type="checkbox"
            checked={postData.published}
            onChange={(e) =>
              setPostData({ ...postData, published: e.target.checked })
            }
          />
        </label>
        <button onClick={createPost}>Create Post</button>
      </div>
      <div>
        <h2>Create Appointment</h2>
        <input
          type="text"
          placeholder="User ID"
          value={appointmentData.userId}
          onChange={(e) =>
            setAppointmentData({ ...appointmentData, userId: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Tutor ID"
          value={appointmentData.tutorId}
          onChange={(e) =>
            setAppointmentData({ ...appointmentData, tutorId: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Post ID"
          value={appointmentData.postId}
          onChange={(e) =>
            setAppointmentData({ ...appointmentData, postId: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Date"
          value={appointmentData.date}
          onChange={(e) =>
            setAppointmentData({ ...appointmentData, date: e.target.value })
          }
        />
        <button onClick={createAppointment}>Create Appointment</button>
      </div>
    </div>
  )
}

export default TestGraph
