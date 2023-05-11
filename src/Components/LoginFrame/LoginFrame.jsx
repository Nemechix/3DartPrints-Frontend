import { useState } from 'react';
import './LoginFrame.css';
import { login } from '../../Services/Login';
import { useNavigate } from 'react-router';
import { Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Divider, IconButton, Link, TextField } from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import Button3D from '../Button/Button';

function LoginFrame({ setOpenLoginPopup, handleRegisterClick }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isPassVisible, setPassVisible] = useState(false);

  const [loading, setLoading] = useState(false)

  function handleClick() {
    setPassVisible(!isPassVisible);
  }

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true)

    try {
      const { token, role, favorites } = await login({ email, password });
  
      if (token) {
        setLoading(false)
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setOpenLoginPopup ? setOpenLoginPopup(false) : null
        navigate("/")
      } else {
        setLoading(false)
        console.log("Email or Password incorrect.");
        
      }
      
    } catch(error) {
      console.log("Email or Password incorrect.");
      setLoading(false)
      alert('Email or Password incorrect.')
    }
  }

  return (
    <div className="Card-login-container">
      <Card
        className="card"
        sx={{ 
          width: "700px", 
          backgroundColor: "white", 
          border: "5 solid #ea5455",
          ...(loading && {filter: 'sepia(50%) opacity(50%)'}) 
        }}
        raised={true}
      >
        <CardHeader title="Login"></CardHeader>
        <CardContent>
          <TextField
            onChange={(event) => setEmail(event.target.value)}
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            InputProps={{
              startAdornment: <Email />,
            }}
          ></TextField>
          <TextField
            onChange={(event) => setPassword(event.target.value)}
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={isPassVisible ? "text" : "password"}
            margin="dense"
            InputProps={{
              startAdornment: <Lock />,
              endAdornment: (
                <IconButton onClick={handleClick}>
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          ></TextField>
        </CardContent>
        <Divider />
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <p style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "10px" }}>
          <Button3D
            onClick={handleRegisterClick}
            className="button-red"
          >
            Register
          </Button3D>            </p>
          <Link to="/api">
            <Button3D
              onClick={handleSubmit}
            className="button"
            >
              Login
            </Button3D>
          </Link>
        </CardActions>
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
  );
}

export default LoginFrame
