import React from "react"
import Home from "./pages/home/home"
import { AuthProvider } from "./context/AuthContext"
import LoginPage from "./pages/loginPage/loginPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserAccountPage from "./pages/userAccountPage/userAccountPage"
import MentorAccountPage from "./pages/mentorAccountPage/MentorAccountPage"
import SignUpPage from "./pages/signUpPage/SignUpPage"
import Contact from "./pages/contact/contact"
import About from "./pages/about/about"
import FindTutor from "./pages/findTutor/findTutor"
import TutorPage from "./components/tutorpage/tutorpage"
import PaymentPage from "./pages/payment/PaymentView"
import PaymentSuccessPage from "./pages/paymentSuccessView/PaymentSuccessView"
import TestCreateAppointment from "./components/Test/TestAppointment/TestCreateAppointment"
import { AppointmentProvider } from "./context/AppointmentContext"
import { CurrentUserProvider } from "./context/CurrentUser"

function App() {
  return (
    <CurrentUserProvider>
      <AuthProvider>
        <AppointmentProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/user/account" element={<UserAccountPage />} />
              <Route path="/mentor/account" element={<MentorAccountPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tutors" element={<FindTutor />} />
              <Route path="/tutor/:id" element={<TutorPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/confirmation" element={<PaymentSuccessPage />} />
              {/* Remove later */}
              <Route path="/createAppointment" element={<TestCreateAppointment />} />
            </Routes>
          </Router>
        </AppointmentProvider>
      </AuthProvider>
    </CurrentUserProvider>
  )
}

export default App
