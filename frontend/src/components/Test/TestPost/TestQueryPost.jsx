import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const GET_POSTS_QUERY = gql`
    query{
        posts{
            id
            title
            content
            published
            authorId
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

const GET_USER_POSTS_QUERY = gql`
    query User($id: String!){
        user(id: $id){
            id
            firstName
            lastName
            email
            role
            posts{
                id
                title
                content
                published
            }
        }
    }
`

const TestQueryPost = () => {
    const [postId, setPostId] = useState("")
    const [post, setPost] = useState(null)
    const [posts, setPosts] = useState([])
    
    const [userId, setUserId] = useState("")
    const [userPosts, setUserPosts] = useState([])

    //Fetch specific post
    const handleFetchPost = async () => {
        try {
            const data = await client.request(GET_POST_QUERY, { id: postId })
            setPost(data.post)
        } catch (error) {
            console.error(error)
            alert("Failed to fetch post")
        }
    }

    //Fetch all posts
    const handleFetchPosts = async () => {
        try {
            const data = await client.request(GET_POSTS_QUERY)
            setPosts(data.posts)
        } catch (error) {
            console.error(error)
            alert("Failed to fetch posts")
        }
    }
    //Fetch user posts
    const handleFetchUserPosts = async () => {
        try {
            const data = await client.request(GET_USER_POSTS_QUERY, { id: userId })
            setUserPosts(data.user.posts)
        } catch (error) {
            console.error(error)
            alert("Failed to fetch user posts")
        }
    }

    return (
        <div>
            <h1>Fetch User Posts</h1>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
            />
            <button onClick={handleFetchUserPosts}>Fetch User Posts</button>
            <ul>
                {userPosts.map((post) => (
                    <li key={post.id}>
                        <div><h3>{post.title} - {post.id}</h3></div>
                        
                        <p>{post.content}</p>
                        <p>{post.published ? "Published" : "Not Published"}</p>
                    </li>
                ))}
            </ul>
            <h1>Fetch Post</h1>
            <input
                type="text"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
                placeholder="Post ID"
            />
            <button onClick={handleFetchPost}>Fetch Post</button>
            {post && (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{post.published ? "Published" : "Not Published"}</p>
                </div>
            )}
            <h1>Fetch Posts</h1>
            <button onClick={handleFetchPosts}>Fetch Posts</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <div><h3>{post.title} - {post.id}</h3></div>
                        <p>{post.content}</p>
                        <p>{post.published ? "Published" : "Not Published"}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TestQueryPost