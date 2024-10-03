import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const UPDATE_POST_MUTATION = gql`
    mutation UpdatePost($id: String!, $input: UpdatePostInput!){
        updatePost(id: $id, input: $input){
            id
            title
            content
            published
        }
    }
`

const GET_POST_QUERY = gql`
    query Post($id: String!){
        post(id: $id){
            id
            title
            content
            published
            authorId
        }
    }
`

const TestUpdatePost = () => {
    const [postId, setPostId] = useState(null);
    const [formData, setFormData] = useState({
      title: "",
      content: "",
      published: false
    });
  
    const handleFormChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSearchChange = (e) => {
      setPostId(e.target.value);
    };
  
    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        const { post } = await client.request(GET_POST_QUERY, { id: postId });
        setFormData({
          title: post.title,
          content: post.content,
          published: post.published
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await client.request(UPDATE_POST_MUTATION, { id: postId, input: formData });
        setPostId("");
        setFormData({ title: "", content: "", published: false });
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h1>Update Post</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={postId}
            onChange={handleSearchChange}
            placeholder="Search by Post ID"
          />
          <button type="submit">Search</button>
        </form>
        <form onSubmit={handleSubmit}>
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
            type="checkbox"
            name="published"
            checked={formData.published}
            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
          />
          <button type="submit">Update Post</button>
        </form>
      </div>
    );
  };

export default TestUpdatePost