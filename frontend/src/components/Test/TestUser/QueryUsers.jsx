import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

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
    }
  }
`

const QueryUsers = () => {
  return (
    <div>QueryUsers</div>
  )
}

export default QueryUsers