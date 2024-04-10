import React from 'react'

const Input = ({lable, placeholder}) => {
  return (
    <div className='input-container'>
      <div className="input">
        
        <label>{lable}<sup style={{color:'red'}}>*</sup></label>
        <input type="text" placeholder={`${placeholder}`} required/>
      </div>
    </div>
  )
}

export default Input