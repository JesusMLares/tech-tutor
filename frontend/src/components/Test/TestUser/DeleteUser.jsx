import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const DeleteUser = () => {
  return (
    <div>DeleteUser</div>
  )
}

export default DeleteUser