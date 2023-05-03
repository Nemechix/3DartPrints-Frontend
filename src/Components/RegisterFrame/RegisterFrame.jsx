import React, { useState } from 'react';
import './RegisterFrame.css';
import postSignUp from '../../Services/postSignUp';

function RegisterFrame({ setOpenRegisterPopup, handleLoginClick }) {

  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const user = await postSignUp({ username, email, password })
      
      if (user) {
        setOpenRegisterPopup ? setOpenRegisterPopup(false) : navigate('/')
        console.log(user)
      }
    } catch(error) {
      console.log(error)
    }
  }

  return(
    <div className="register-wrapper">
      <form onSubmit={handleSubmit}>
              <h2>Datos para el registro:</h2>      <hr />
        <label>
          <p>Username:</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
         <label>
          <p>Email:</p>
          <input type="email" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password:</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
          <p>Confirma el Password:</p>
          <input type="password" onChange={e => setPassword2(e.target.value)}/>
        </label>
        <div>
           <br></br>
        </div>
        <div>
            <button id='submit' type="submit">Registrar</button>
        </div>
        <div>
            <button id='login' onClick={handleLoginClick}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterFrame