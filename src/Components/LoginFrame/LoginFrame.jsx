import React, { useState } from 'react';
import './LoginFrame.css';
import { login } from '../../Services/Login';

function LoginFrame({ setToken }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(event) {
    event.preventDefault()
    const token = await login({email, password})
    // console.log(token)
  }

  return(
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Por favor ingresa:</h2>            <hr />
        <label>
          <p>Username:</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password:</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
          <div>
           <br></br>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default LoginFrame