import React from 'react'
import HeadingText from '../components/HeadingText'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

const LandingPage = () => {


  

  return (
    <>
      <div className="landing-page-container">
        <div className="landing-page">
          <HeadingText text="Welcome to PopX"/>
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"/>
          <Button text="Create Account" bgcolor = "#6C25FF" textcolor = "#FFFFFF" link="/createAccount"/>
          <Button text="Already Registered? Login" bgcolor = "#6C25FF4B" textcolor = "#1D2226" link="/signin"/>
        </div>
      </div>
    </>
  )
}

export default LandingPage  