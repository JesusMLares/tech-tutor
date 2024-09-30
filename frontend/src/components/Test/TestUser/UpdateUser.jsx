import React, { useState } from "react"
import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient("http://localhost:5000")

const UpdateUser = () => {
  return (
    <div>UpdateUser</div>
  )
}

export default UpdateUser