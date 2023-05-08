import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import './RegisterFrame.css';
import postSignUp from '../../Services/postSignUp';
import getAllUsers from '../../Services/GetAllUser';
import { useNavigate } from 'react-router';

function RegisterFrame({ setOpenRegisterPopup, handleLoginClick }) {

  const [userBasics, setUserBasics] = useState(false)

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const [usernameUnique, setUsernameUnique] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [emailUnique, setEmailUnique] = useState(false)
  const [equalPasswordConfirm, setEqualPasswordConfirm] = useState(false)

  const [enableSubmit, setEnableSubmit] = useState(false)

  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  // Quering all Usernames and Emails
  useEffect(() => {

    async function fetchData () {
      try {
        const users = await getAllUsers()
        setUsers(users.map(user => {
          return {username: user.username, email: user.email}
        }))
      } catch(error) {
        console.log('ERROR DESCONOCIDO: ', error)
      }
    }

      fetchData()
  }, [])

  // Check if the username already exists
  useEffect(() => {
    setUsernameUnique(!users.some(user => user.username === username))
  }, [username])

  // Check if the email format is correct and if already exists
  useEffect(() => {
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    setEmailValid(regexExp.test(email))
    setEmailUnique(!users.some(user => user.email === email))
  }, [email])

  // Check if Confirm Password is EQUAL to Password
  useEffect(() => {
    setEqualPasswordConfirm(password === passwordConfirm)
  }, [passwordConfirm])

  // Check if everything are OK
  useEffect(() => {
    setEnableSubmit(
      username &&
      email &&
      password &&
      passwordConfirm &&
      usernameUnique &&
      emailValid &&
      emailUnique &&
      equalPasswordConfirm
    )
  }, [password, usernameUnique, emailValid, emailUnique, equalPasswordConfirm])

  function handleBasicsSubmit(event) {
    event.preventDefault()
    setUserBasics(true)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const name = event.target.name.value
    const surname = event.target.surname.value
    const birth = event.target.birth.value
    const printer = event.target.printer.value
    const designer = event.target.designer.value

    try {
      // console.log(users)
      const user = await postSignUp(
        {
          username, 
          email, 
          password, 
          name, 
          surname, 
          birth, 
          printer, 
          designer 
        }
      )

      if (user) {
        setOpenRegisterPopup ? setOpenRegisterPopup(false) : navigate('/')
      }
    } catch(error) {
      console.log(error)
    }
  }

  return(
    <div className="register-wrapper">
      {/* User Basics Form */}
      <form onSubmit={handleBasicsSubmit}
        style={{display: userBasics ? 'none' : 'block'}}
      >
        <h2>Datos para el registro:</h2>
        <hr/>
        <label>
          <p>Username:</p>
          <input type="text" onChange={e => setUsername(e.target.value)}/>
          <Typography 
            variant='caption' 
            color='red'
            display={!username || usernameUnique ? 'none' : 'block'}
          >
            <WarningAmberRoundedIcon fontSize='small'/>
            Username already exists
          </Typography>
        </label>
         <label>
          <p >Email:</p>
          <input type="email" onChange={e => setEmail(e.target.value)}/>
          <Typography 
            variant='caption' 
            color='red'
            display={!email || emailValid ? 'none' : 'block'}
          >
            <WarningAmberRoundedIcon fontSize='small'/>
            Must be a valid email
          </Typography>
          <Typography 
            variant='caption' 
            color='red'
            display={!email || emailUnique ? 'none' : 'block'}
          >
            <WarningAmberRoundedIcon fontSize='small'/>
            Email already exists
          </Typography>
        </label>
        <label>
          <p>Password:</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
          <p>Confirma el Password:</p>
          <input type="password" onChange={e => setPasswordConfirm(e.target.value)}/>
          <Typography 
            variant='caption' 
            color='red'
            display={!passwordConfirm || equalPasswordConfirm ? 'none' : 'block'}
          >
            <WarningAmberRoundedIcon fontSize='small'/>
            Password should be the same
          </Typography>
        </label>
        <div>
           <br></br>
        </div>
        <div>
            <button className='submit' type="submit" disabled={!enableSubmit}>Registrar</button>
        </div>
        <div>
            <button id='login' onClick={handleLoginClick}>Login</button>
        </div>
      </form>

      {/* User Details Form */}
      <form onSubmit={handleSubmit}
        style={{display: userBasics ? 'block' : 'none'}}
      >
        <h2>Datos para el registro:</h2>
        <hr/>
        <label>
          <p>Name:</p>
          <input type="text" name='name'/>
        </label>
        <label>
          <p>Surname:</p>
          <input type="text" name='surname'/>
        </label>
        <label>
          <p>Birthdate:</p>
          <input type="date" name='birth'/>
        </label>
        <label>
          <p>¿Do you have Printer/s?</p>
          <input 
            id='printerNo' 
            type="radio" 
            name='printer'
            value={0} 
            defaultChecked
          />
          <label htmlFor='printerNo'>No</label>
          <input 
            id='printerYes'
            type="radio" 
            name='printer'
            value={1} 
          />
          <label htmlFor='printerYes'>Yes</label>
        </label>
        <label>
          <p>¿Are you Designer?</p>
          <input 
            id='designerNo'
            type="radio" 
            name='designer'
            value={0}
            defaultChecked
          />
          <label htmlFor='designerNo'>No</label>
          <input 
            id='designerYes'
            type="radio" 
            name='designer'
            value={1}
          />
          <label htmlFor='designerYes'>Yes</label>
        </label>
        <div>
           <br></br>
        </div>
        <div>
            <button className='submit' type="submit">Registrar</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterFrame