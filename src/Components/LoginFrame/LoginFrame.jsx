import React, { useState } from 'react';
import './LoginFrame.css';

function LoginFrame({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  return(
    <div className="login-wrapper">
      <form>
        <h2>Por favor ingresa:</h2>            <hr />
        <label>
          <p>Username:</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
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