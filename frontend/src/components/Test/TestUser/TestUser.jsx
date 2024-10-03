import React from 'react'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import QueryUsers from './QueryUsers'
import DeleteUser from './DeleteUser'

const TestUser = () => {
  return (
    <div>
        <CreateUser/>
        <UpdateUser/>
        <QueryUsers/>
        <DeleteUser/>
    </div>
  )
}

export default TestUser