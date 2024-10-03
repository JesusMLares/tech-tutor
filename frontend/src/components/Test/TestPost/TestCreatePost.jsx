import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const CREATE_POST_MUTATION = gql`
  mutation CreatePost($input: CreatePostInput!){
    createPost(input: $input){
      id
      title
      content
      published
      authorId
    }
  }
`

const TestCreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    published: false,
    authorId: ""
  })


  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.request(CREATE_POST_MUTATION, { input: formData });
      setFormData({ title: "", content: "", published: false, authorId: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Post</h1>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleFormChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="content"
        value={formData.content}
        onChange={handleFormChange}
        placeholder="Content"
      />
      <input
        type="text"
        name="authorId"
        value={formData.authorId}
        onChange={handleFormChange}
        placeholder="Author ID"
      />
      <button
        type="submit"
      >
        Create Post
      </button>
    </form>
  )
}

export default TestCreatePost