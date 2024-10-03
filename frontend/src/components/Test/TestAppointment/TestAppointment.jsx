import React from 'react'
import TestCreateAppointment from './TestCreateAppointment'
import TestQueryAppointment from './TestQueryAppointment'
import TestUpdateAppointment from './TestUpdateAppointment'
import QueryAppointmentByUser from './QueryAppointmentByUser'

const TestAppointment = () => {
  return (
    <div>
        
        <TestCreateAppointment/>
        <TestUpdateAppointment/>
        <TestQueryAppointment/>
        <QueryAppointmentByUser/>
    </div>
  )
}

export default TestAppointment