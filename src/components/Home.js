import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Home(){

  const location = useLocation();

  return (
    <div className='homee'>
      <div className='homepage'>
        <h1>Hello {location.state.id} welcome to the home</h1>
      </div>
    </div>
    
  )
}

export default Home
