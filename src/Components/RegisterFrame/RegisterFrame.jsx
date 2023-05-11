import { useEffect, useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { Card, CardActions, CardContent, CardHeader, Divider, IconButton, Link, TextField } from '@mui/material';
import './RegisterFrame.css';
import postSignUp from '../../Services/postSignUp';
import getAllUsers from '../../Services/GetAllUser';
import { useNavigate } from 'react-router';
import Button3D from '../Button/Button';

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
      <Card
        className="card"
        sx={{ width: "700px", backgroundColor: "white" }}
        raised={true}
      >
        <CardHeader title="Datos para el registro:"></CardHeader>

      {/* User Basics Form */}
  <CardContent onSubmit={handleBasicsSubmit}
        style={{display: userBasics ? 'none' : 'block'}}
      >

      <TextField
            onChange={e => setUsername(e.target.value)}
            fullWidth={true}
            label="User Name"
            variant="outlined"
            margin="dense"
            >
          <Typography 
            variant='caption' 
            color='red'
            display={!username || usernameUnique ? 'none' : 'block'}
          >
            <WarningAmberRoundedIcon fontSize='small'/>
            Username already exists
          </Typography>
        </TextField>


      <TextField
            onChange={(e) => setEmail(e.target.value)}
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            type="email">

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
        </TextField>
        
        <TextField
            onChange={(e) => setPassword(e.target.value)}
            fullWidth={true}
            label="Password"
            variant="outlined"
            margin="dense"
            type="password"
          ></TextField>

        <TextField
            onChange={(e) => setPasswordConfirm(e.target.value)}
            fullWidth={true}
            label="Confirma el Password:"
            variant="outlined"
            margin="dense"
            type="password"
        >
          <Typography 
            variant='caption' 
            color='red'
            display={!passwordConfirm || equalPasswordConfirm ? 'none' : 'block'}
          >
            <WarningAmberRoundedIcon fontSize='small'/>
            Password should be the same
          </Typography>
        </TextField>
                  <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <p style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "10px" }}>
              <Button3D 
              onClick={handleBasicsSubmit} className="button" type="submit" disabled={!enableSubmit} >
              Registrar
              </Button3D>
              </p>
            <Link to="/api">
              <Button3D
              onClick={handleLoginClick}
            className="button-green"
              >
              Login
              </Button3D>
            </Link>
          </CardActions>
    </CardContent>

        <Divider />

      {/* User Details Form */}
      <CardActions onSubmit={handleSubmit}
        style={{display: userBasics ? 'block' : 'none'}}>

        <TextField fullWidth label="Name" variant="outlined" margin="dense" name="name" />
        <TextField fullWidth label="Surname" variant="outlined" margin="dense" name="surname" />
        <TextField fullWidth label="Birthdate" position="end" variant="outlined" margin="dense" name="birth" type="date" />
        <p></p>
        <Divider />
        <p></p>
        <Typography variant="body1">Do you have Printer/s?</Typography>
            <FormControl component="fieldset" margin="dense">
                <FormControl row aria-label="printer" name="printer">
                    <FormControlLabel value="0" control={<Radio />} label="No" defaultChecked />
                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                </FormControl>
            </FormControl>
        <p></p>
        <Divider />
        <p></p>
        <Typography variant="body1">Are you Designer?</Typography>
            <FormControl component="fieldset" margin="dense">
                <RadioGroup row aria-label="designer" name="designer">
                    <FormControlLabel value="0" control={<Radio />} label="No" defaultChecked />
                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                </RadioGroup>
            </FormControl>
        <p></p>
        <Divider />
        <p></p>
              <Button3D 
              onClick={handleSubmit} className="button-red" type="submit">
              Register
              </Button3D>
      </CardActions>
    </Card>
    </div>
  )
}

export default RegisterFrame
