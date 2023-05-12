import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect, useContext } from 'react';
import { Backdrop, Divider, Fade, Grid, Modal, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './ResponsiveAppBar.css'
import logo from '/3DArts_Logo_TRIM.png'
import { useNavigate } from 'react-router-dom';

import LoginFrame from '../LoginFrame/LoginFrame';
import GetMyProfile from '../../Services/GetMyProfile';
// import getAllCategories from '../../Services/getAllCategories';
import CategoriesNavBar from './CategoriesNavBar';
import RegisterFrame from '../RegisterFrame/RegisterFrame';
// import { login } from '../../Services/Login';

import { Link } from 'react-router-dom';

import WebAppBar from './WebAppBar';
import SmartphoneAppBar from './SmartphoneAppBar';

import { loginContext } from '../../Context/loginContext';

// const pages = ['Pokemon', 'Cocina', 'Marvel', 'Dc', 'Naruto', 'Digimon', 'Lego'];
// const settings = [
//   {
//     name: 'Profile', 
//     url: '/profile'
//   },
//   {
//     name: 'Upload', 
//     url: '/upload'
//   },
//   {
//     name: 'Dashboard',
//     url: '/'
//   }
// ]

function ResponsiveAppBar() {
  // const navigate = useNavigate()

  // const [anchorElNav, setAnchorElNav] = useState(null)
  // const [anchorElUser, setAnchorElUser] = useState(null)
  
  const [openLoginPopup, setOpenLoginPopup] = useState(false)
  const [openRegisterPopup, setOpenRegisterPopup] = useState(false)
  
  const [user, setUser] = useState()

  const { reload, setReload } = useContext(loginContext)

  useEffect(() => {

    async function fetchData() {
      const user = await GetMyProfile(localStorage.getItem('token'))
      setUser(user)
    }

    localStorage.getItem('token') ?
      fetchData()
      : setUser(null)

    setReload(false)
      
  }, [reload])

  // function handleMenuItemClick(categoryId) {
  //   handleCloseNavMenu()
  //   navigate(`/category/${categoryId}`);
  // }

  // function handleUserItemClick(link) {
  //   handleCloseUserMenu()
  //   navigate(link)
  // }

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleOpenLoginMenu = () => {
  //   setOpenLoginPopup(true)
  // }

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleCloseLoginMenu = () => {
    setOpenLoginPopup(false)
  }

  const handleCloseRegisterMenu = () => {
    setOpenRegisterPopup(false)
  }

  function handleRegisterClick() {
    setOpenLoginPopup(false)
    setOpenRegisterPopup(true)
  }

  function handleLoginClick() {
    setOpenRegisterPopup(false)
    setOpenLoginPopup(true)
  }

  // function handleLogoutClick() {
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('role')
  //   localStorage.removeItem('favorites')
  //   handleCloseUserMenu()
  //   navigate('/')
  // }

  // function UserMenu() {
  //   return (
  //     <Menu

  //       sx={{
  //         mt: '45px',
  //       }}
  //       id="menu-appbar"
  //       anchorEl={anchorElUser}
  //       anchorOrigin={{
  //         vertical: 'top',
  //         horizontal: 'right',
  //       }}
  //       keepMounted
  //       transformOrigin={{
  //         vertical: 'top',
  //         horizontal: 'right',
  //       }}
  //       open={Boolean(anchorElUser)}
  //       onClose={handleCloseUserMenu}
  //     >
  //       {settings.map((setting) => (
  //         <MenuItem key={setting.name} onClick={() => {handleUserItemClick(setting.url)}}>
  //           <Typography textAlign="center">{setting.name}</Typography>
  //         </MenuItem>
  //       ))}
        
  //       <MenuItem onClick={handleLogoutClick}>
  //           <Typography textAlign="center">Logout</Typography>
  //       </MenuItem>

  //     </Menu>
  //   )
  // }

  

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#f0f0f0",
          boxShadow: "none",
          borderBottom: "1px solid lightgray",
        }}
      >
        {/* Header itself */}
        <Container maxWidth="xl" sx={{ px: 1 }}>
          <Toolbar sx={{ display: "flex", flexWrap: "wrap" }} disableGutters>
            <WebAppBar 
              user={user}
              setUser={setUser}
              sx={{ display: { xs: "none", md: "flex" } }}
            />
            
            <SmartphoneAppBar 
              user={user} 
              setUser={setUser}
              setOpenLoginPopup={setOpenLoginPopup}
              sx={{ display: { xs: "flex", md: "none" } }}
            />
          </Toolbar>
        </Container>

        {/* Categories NavBar */}
        <Divider sx={{ backgroundColor: "inherit" }} />
        <Container
          maxWidth="xl"
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <CategoriesNavBar />
        </Container>
      </AppBar>

      {/* Login Popup */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openLoginPopup}
        onClose={handleCloseLoginMenu}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade
          in={openLoginPopup}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Box>
            <LoginFrame
              setOpenLoginPopup={setOpenLoginPopup}
              handleRegisterClick={handleRegisterClick}
            />
          </Box>
        </Fade>
      </Modal>

      {/* Register Popup */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openRegisterPopup}
        onClose={handleCloseRegisterMenu}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade
          in={openRegisterPopup}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            border: "2px solid red",
          }}
        >
          <Box>
            <RegisterFrame
              setOpenRegisterPopup={setOpenRegisterPopup}
              handleLoginClick={handleLoginClick}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
export default ResponsiveAppBar;