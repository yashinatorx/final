import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <div className='w-full h-full absolute '>
      <img src="./Assest/background2.jpg" alt="#" className=' h-full' />
      </div>
      <LoginForm  setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default Login
