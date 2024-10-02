//Primsa
import React from "react"
import TestUser from "./components/Test/TestUser/TestUser"
import TestPost from "./components/Test/TestPost/TestPost"
import TestAppointment from "./components/Test/TestAppointment/TestAppointment"
import { CurrentUserProvider } from "./context/CurrentUser"

function App() {
  return (
    <div>
      <CurrentUserProvider>
        <TestUser />
        <TestPost />
        <TestAppointment />
      </CurrentUserProvider>
    </div>
  )
}

export default App
