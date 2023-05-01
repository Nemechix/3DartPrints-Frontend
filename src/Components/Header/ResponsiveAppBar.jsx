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
import { useState, useEffect } from 'react';
import { Backdrop, Fade, Grid, Modal, TextField } from '@mui/material';

import './ResponsiveAppBar.css'
import { useNavigate } from 'react-router-dom';

import LoginFrame from '../LoginFrame/LoginFrame';

const pages = ['Pokemon', 'Cocina'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const navigate = useNavigate()

  let i = 1

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  // const [anchorElLogin, setAnchorElLogin] = useState(null)
  const [openLoginPopup, setOpenLoginPopup] = useState(false)

  const isLogged = true

  function handleMenuItemClick(categoryId) {
    navigate(`/category/${categoryId}/designs`);
  }


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenLoginMenu = (event) => {
    // setAnchorElLogin(event.currentTarget)
    setOpenLoginPopup(true)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseLoginMenu = () => {
    setOpenLoginPopup(false)
  }

  return (
    <>
      <AppBar position="static"
        sx={{ backgroundColor: '#F9F5EB' }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', flexWrap: 'wrap' }} disableGutters>
            <Grid container
              sx={{
                display: 'flex',
                alignItems: 'center',
                py: 1
              }}
              rowSpacing={1}
            >
              {/* Web Size Menu */}
              <Grid item md={1}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                // color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page}>
                      <Typography onClick={() => handleMenuItemClick(page)} textAlign="center">
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>

              {/* Web Size Icon & Title */}
              <Grid item md={3}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#0d0628',
                    textDecoration: 'none',
                  }}
                >
                  3DArtPrints
                </Typography>
              </Grid>

              {/* Web Size Search Input */}
              <Grid item md={3}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  // backgroundColor: 'GhostWhite',
                  // border: '1px solid black', 
                  // borderRadius: 3, 
                  px: 1,
                  my: 0,
                  mx: 3
                }}
              >
                <TextField
                  sx={{
                    backgroundColor: 'white',
                    // border: '1px solid black',
                    borderRadius: 15,
                    // flexGrow: 3, 
                    width: '100%',
                    // margin: 1
                  }}
                  id="searchBarInput"
                  label="Search"
                  variant="outlined"
                />
              </Grid>

              {/* Web Size Quick Actions */}
              <Grid item md
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    display: { xs: 'none', md: 'flex' }
                  }}
                >
                  {/* {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, display: 'block' }}
                    >
                      {page}
                    </Button>
                  ))} */}
                  <Button
                    startIcon={<AutoFixHighIcon />}
                    onClick={handleCloseNavMenu}
                    // sx={{ display: 'block' }}
                    variant='contained'
                    color='success'
                    size='small'
                  // href='/'
                  >
                    <Typography
                      // variant="h6"
                      // noWrap
                      // component="button"
                      // href="/"
                      sx={{
                        // mr: 0,
                        // display: { xs: 'none', md: 'flex' },
                        // fontFamily: 'monospace',
                        fontWeight: 600,
                        letterSpacing: '.1rem',
                        // color: 'inherit',
                        // textDecoration: 'none',
                      }}
                    >
                      Inspire Me!
                    </Typography>
                  </Button>
                </Box>
              </Grid>

              {/* Smartphone Size Icon & Title */}
              <Grid item xs={8}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  alignItems: 'center',
                  pl: '10px'
                }}
              >
                {/* Icon */}
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black' }} />

                {/* Title */}
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 0,
                    display: { xs: 'flex', md: 'none' },
                    // flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#0d0628',
                    textDecoration: 'none',
                  }}
                >
                  3DArtPrints
                </Typography>
              </Grid>

              {/* Smartphone Size InspireMe Icon */}
              <Grid item xs={`${isLogged ? 1 : 3}`}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  justifyContent: `${isLogged ? 'center' : 'left'}`
                }}
              >
                <Tooltip title="Inspire Me!">
                  <IconButton sx={{ p: 0 }}>
                    <AutoFixHighIcon sx={{ margin: 1 }} />
                  </IconButton>
                </Tooltip>
              </Grid>

              {/* Smartphone Size Favs Icon */}
              <Grid item xs={1}
                sx={{
                  display: {
                    xs: `${isLogged ? 'flex' : 'none'}`,
                    md: 'none'
                  },
                  justifyContent: 'center'
                }}
              >
                <Tooltip title="Favourites">
                  <IconButton sx={{ p: 0 }}>
                    <FavoriteBorderIcon sx={{ margin: 1 }} />
                  </IconButton>
                </Tooltip>
              </Grid>

              {/* Smartphone Size Cart Icon */}
              <Grid item xs={1}
                sx={{
                  display: {
                    xs: `${isLogged ? 'flex' : 'none'}`,
                    md: 'none'
                  },
                  justifyContent: 'center'
                }}
              >
                <Tooltip title="Cart">
                  <IconButton sx={{ p: 0 }}>
                    <ShoppingCartOutlinedIcon sx={{ margin: 1 }} />
                  </IconButton>
                </Tooltip>
              </Grid>

              {/* Smartphone Size User Icon */}
              <Grid item xs={1} md={1}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  ml: { md: 2 },
                  justifyContent: 'center'
                }}
              >
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton
                      sx={{ p: 0 }}
                      onClick={isLogged ? handleOpenUserMenu : handleOpenLoginMenu} //handleOpenLoginMenu} 
                    // sx={{ p: 0 }}
                    >
                      <Avatar alt={`${isLogged ? "Remy Sharp" : ''}`} src="/static/images/avatar/2.jpg"
                        sx={{ color: 'black' }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{
                      mt: '45px',
                    }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                  {/* <Menu
                    sx={{
                      // display: {xs: 'flex', md: 'none'},
                      mt: '45px',
                    }}
                    id='login-appbar'
                    anchorEl={anchorElLogin}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={Boolean(anchorElLogin)}
                    onClose={handleCloseLoginMenu}
                  >
                      
                    <MenuItem onClick={handleCloseLoginMenu}>
                      <Typography>
                        Login
                      </Typography>
                    </MenuItem>
                  </Menu> */}


                </Box>
              </Grid>

              {/* Web Size User Icon */}
              <Grid item xs={1} md={1}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  ml: { md: 2 },
                  justifyContent: 'center'
                }}
              >
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton
                      sx={{ p: 0 }}
                      onClick={isLogged ? handleOpenUserMenu : () => navigate('/login')} //handleOpenLoginMenu} 
                    // sx={{ p: 0 }}
                    >
                      <Avatar alt={`${isLogged ? "Remy Sharp" : ''}`} src="/static/images/avatar/2.jpg"
                        sx={{ color: 'black' }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{
                      mt: '45px',
                    }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                  {/* <Menu
                    sx={{
                      // display: {xs: 'flex', md: 'none'},
                      mt: '45px',
                    }}
                    id='login-appbar'
                    anchorEl={anchorElLogin}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={Boolean(anchorElLogin)}
                    onClose={handleCloseLoginMenu}
                  >
                      
                    <MenuItem onClick={handleCloseLoginMenu}>
                      <Link to='/login' textDecoration='null'>
                        <Typography>
                          Login
                        </Typography>
                      </Link>
                    </MenuItem>
                  </Menu> */}


                </Box>
              </Grid>

              {/* Smartphone Size Menu */}
              <Grid item xs={2}
                sx={{ display: { xs: 'flex', md: 'none' } }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                // color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page}>
                      <Typography onClick={() => handleMenuItemClick(page)} textAlign="center">
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>

              {/* Smartphone Size Search Input */}
              <Grid item xs={10}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  // backgroundColor: 'GhostWhite',
                  // border: '1px solid black', 
                  // borderRadius: 3, 
                  px: 1,
                  my: 0
                }}
              >
                <TextField
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 15,
                    // flexGrow: 3, 
                    width: '100%',
                    // margin: 0,
                  }}
                  id="searchBarInput"
                  label="Search"
                  variant="outlined"
                />
              </Grid>

            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      <Modal
        // sx={{
        //   bgcolor: 'white'
        // }}
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
        <Fade in={openLoginPopup}>
          <Box sx={{
            // display: 'flex',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            height: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <LoginFrame />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
export default ResponsiveAppBar;