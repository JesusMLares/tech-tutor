import React from "react"
import TestCreatePost from "./TestCreatePost"
import TestUpdatePost from "./TestUpdatePost"
import TestQueryPost from "./TestQueryPost"

const TestPost = () => {
  return (
    <div>
      <TestCreatePost />
      <TestUpdatePost />
      <TestQueryPost />
    </div>
  )
}

export default TestPost
