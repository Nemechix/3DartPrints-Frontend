import React, { useState } from 'react';
import './LoginFrame.css';
import { login } from '../../Services/Login';
import { useNavigate } from 'react-router';

function LoginFrame({ setOpenLoginPopup, handleRegisterClick }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    const { token, role } = await login({email, password})

    if (token) {
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)
      setOpenLoginPopup ? setOpenLoginPopup(false) : navigate('/')
    } else {
      console.log('Email or Password incorrect.')
    }
  }

  return(
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Por favor ingresa:</h2>            <hr />
        <label>
          <p>Username:</p>
          <input type="text" onChange={e => setEmail(e.target.value)} autoFocus/>
        </label>
        <label>
          <p>Password:</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
          <div>
           <br></br>
        </div>
        <div>
          <button id='submit' type="submit">Enviar</button>
        </div>
        <div>
          <button id='signup' onClick={handleRegisterClick}>Registrarse</button>
        </div>
      </form>
    </div>
  )
}

export default LoginFrame