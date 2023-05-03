import React from 'react'
import LoginFrame from '../../Components/LoginFrame/LoginFrame'
import { useNavigate } from 'react-router'

function Login() {
  
  const navigate = useNavigate()

  return (
      <LoginFrame handleRegisterClick={() => navigate('/register')}/>
  )
}

export default Login