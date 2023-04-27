import React, { useState } from 'react';
import './RegisterFrame.css';

function RegisterFrame({ setToken }) {

  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  return(
    <div className="register-wrapper">
      <h1>Datos para el registro:</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
         <label>
          <p>Email</p>
          <input type="email" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
          <p>Confirma el Password</p>
          <input type="password" onChange={e => setPassword2(e.target.value)}/>
        </label>
        <div>
           <br></br>
        </div>
        <div>
            <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterFrame