import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CreateAccount from './pages/CreateAccount'
import SigninPage from './pages/SigninPage'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
          <Route path="/signin" element={<SigninPage/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App