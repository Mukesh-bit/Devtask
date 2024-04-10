import React from 'react'

const HeadingText = ({text, width, marginB}) => {
  return (
    <div className='heading-text' style={{width:`${width}`, marginBottom:`${marginB}`}}>
      <h1>{text}</h1>
    </div>
  )
}

export default HeadingText