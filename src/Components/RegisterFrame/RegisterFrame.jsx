import { useEffect, useState } from 'react';
import { CircularProgress, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { Card, CardActions, CardContent, CardHeader, Divider, Link, IconButton, TextField } from '@mui/material';
import './RegisterFrame.css';
import postSignUp from '../../Services/postSignUp';
import getAllUsers from '../../Services/GetAllUser';
import { useNavigate } from 'react-router';
import Button3D from '../Button/Button';

function RegisterFrame({ setOpenRegisterPopup, handleLoginClick }) {

  const [loading, setLoading] = useState(false)

  const [userBasics, setUserBasics] = useState(false)

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [birth, setBirth] = useState()
  const [printer, setPrinter] = useState(0)
  const [designer, setDesigner] = useState(0)

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
    enableSubmit ?
      setUserBasics(true)
      : alert('You should fill every field')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)

    try {
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

      setLoading(false)

      if (user) {
        setOpenRegisterPopup ? setOpenRegisterPopup(false) : navigate('/')
      }
    } catch(error) {
      console.log(error)
      setLoading(false)
      alert('Something went wrong')
    }
  }

  return(
    <div className="register-wrapper">
      <Card
        className="card"
        sx={{ 
          width: "700px",
          padding: "10px",
          backgroundColor: "white", 
          border: "5 solid #ea5455",
          ...(loading && {filter: 'sepia(50%) opacity(25%)'})
        }}
        raised={true}
      >

        <CardHeader title="Datos para el registro:"></CardHeader>

        <CardContent>
          {/* User Basics Form */}
          <Card
            onSubmit={handleBasicsSubmit}
            variant=''
            style={{
              display: userBasics ? 'none' : 'block',
            }}
          >
            <CardContent 
              // onSubmit={handleBasicsSubmit}
              // style={{display: userBasics ? 'none' : 'block'}}
            >

              <TextField
                onChange={e => setUsername(e.target.value)}
                fullWidth={true}
                label="User Name"
                variant="outlined"
                margin="dense"
              />
              <Typography 
                variant='caption' 
                color='red'
                display={!username || usernameUnique ? 'none' : 'block'}
              >
                <WarningAmberRoundedIcon fontSize='small'/>
                Username already exists
              </Typography>


              <TextField
                onChange={(e) => setEmail(e.target.value)}
                fullWidth={true}
                label="Email"
                variant="outlined"
                margin="dense"
                type="email"
              />
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
                
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                fullWidth={true}
                label="Password"
                variant="outlined"
                margin="dense"
                type="password"
              />

              <TextField
                onChange={(e) => setPasswordConfirm(e.target.value)}
                fullWidth={true}
                label="Confirma el Password:"
                variant="outlined"
                margin="dense"
                type="password"
              />
              <Typography 
                variant='caption' 
                color='red'
                display={!passwordConfirm || equalPasswordConfirm ? 'none' : 'block'}
              >
                <WarningAmberRoundedIcon fontSize='small'/>
                Password should be the same
              </Typography>
            </CardContent>
            
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <p style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "10px" }}>
                <Button3D 
                  onClick={handleBasicsSubmit} className="button" type="submit" disabled={!enableSubmit}
                >
                  Register
                </Button3D>
              </p>
              {/* <Link to="/api"> */}
                <Button3D
                  onClick={handleLoginClick}
                  className="button-green"
                >
                  Login
                </Button3D>
              {/* </Link> */}
            </CardActions>
          </Card>

          {/* User Details Form */}
          <Card
            variant=''
            style={{
              display: userBasics ? 'block' : 'none',
            }}
          >
            <CardContent>
              <TextField 
                fullWidth 
                label="Name" 
                variant="outlined" 
                margin="dense" 
                name="name" 
                onChange={event => setName(event.target.value)}
              />
              <TextField 
                fullWidth 
                label="Surname" 
                variant="outlined" 
                margin="dense" 
                name="surname" 
                onChange={event => setSurname(event.target.value)}
              />
              <TextField 
                fullWidth 
                label="Birthdate" 
                position="end" 
                variant="outlined" 
                margin="dense" 
                name="birth" 
                type="date" 
                InputLabelProps={{ shrink: true }} 
                onChange={event => setBirth(event.target.value)}
              />

              <Divider sx={{ my:2 }}/>

              <Typography variant="body1">Do you have Printer/s?</Typography>
              <FormControl component="fieldset" margin="dense">
                <RadioGroup 
                  row 
                  aria-labelledby="printer" 
                  defaultValue='0' 
                  name="printer" 
                  onChange={event => setPrinter(event.target.value)}
                >
                  <FormControlLabel value="0" control={<Radio />} label="No" />
                  <FormControlLabel value="1" control={<Radio />} label="Yes" />
                </RadioGroup>
              </FormControl>

              <Divider sx={{ my:2 }}/>

              <Typography variant="body1">Are you Designer?</Typography>
              <FormControl component="fieldset" margin="dense">
                <RadioGroup 
                  row 
                  aria-labelledby="designer" 
                  defaultValue='0' 
                  name="designer"
                  onChange={event => setDesigner(event.target.value)}
                >
                  <FormControlLabel value="0" control={<Radio />} label="No" />
                  <FormControlLabel value="1" control={<Radio />} label="Yes" />
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button3D 
                className="button-red" 
                type="submit"
                onClick={handleSubmit}
              >
                Register
              </Button3D>
            </CardActions>
          </Card>

        </CardContent>

      </Card>
      {loading && <CircularProgress
        size={160}
        sx={{
          color: '#ff7c24',
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: '-80px',
          marginLeft: '-80px',
        }}
      />}
    
    </div>
  )
}

export default RegisterFrame
