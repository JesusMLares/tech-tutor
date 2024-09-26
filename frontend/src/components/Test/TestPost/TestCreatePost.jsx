import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const CREATE_POST_MUTATION = gql`

`

const TestCreatePost = () => {
  return (
    <div>TestCreatePost</div>
  )
}

export default TestCreatePost