import React from 'react'
import SignupForm from '../components/SignupForm'

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <div className='w-full h-full absolute'>
      <img src="../Assest/background3.jpg" alt="#" className=' h-full w-full' />
      </div>
      <SignupForm  setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default Signup
