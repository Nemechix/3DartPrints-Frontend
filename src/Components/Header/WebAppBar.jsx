import { Avatar, Box, Button, Grid, IconButton, Menu, MenuItem, TextField, Tooltip, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate, useParams } from "react-router-dom";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UserMenu from "./UserMenu";

const pages = ['Pokemon', 'Cocina', 'Marvel', 'Dc', 'Naruto', 'Digimon', 'Lego'];
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

function WebAppBar({ user, setUser }) {
  const navigate = useNavigate()


  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  
  function handleMenuItemClick(categoryId) {
    handleCloseNavMenu()
    navigate(`/category/${categoryId}`);
  }

  function handleUserItemClick(link) {
    handleCloseUserMenu()
    navigate(link)
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleLogoutClick() {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('favorites')
    handleCloseUserMenu()
    setUser(null)
    navigate('/')
  }

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
      <Grid 
        container
        sx={{
          display: "flex",
          alignItems: "center",
          py: 1,
        }}
        rowSpacing={1}
      >

        {/* Web Size Menu */}
        <Grid item md={1} sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography
                  onClick={() => handleMenuItemClick(page)}
                  textAlign="center"
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Grid>

        {/* Web Size Icon & Title */}
        <Grid
          item
          md={1}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Link to="/">
            <img
              src="https://i.postimg.cc/ncz4v9FJ/LOGO2.png"
              alt="LOGO"
              style={{ height: 60 }}
            />
          </Link>
          
        </Grid>

        {/* Web Size Search Input */}
        <Grid
          item
          md
          sx={{
            display: { xs: "none", md: "flex" },
            px: 1,
            my: 0,
            mx: 3,
          }}
        >
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: 15,
              width: "100%",
            }}
            id="webSearchBarInput"
            label="Search"
            variant="outlined"
          />
        </Grid>

        {/* Web Size Quick Actions */}
        <Grid
          item
          md
          sx={{
            display: { xs: "none", md: "none" },
            flexGrow: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Button
            startIcon={<AutoFixHighIcon />}
            onClick={handleCloseNavMenu}
            variant="contained"
            color="success"
            size="small"
          >
            <Typography
              sx={{
                fontWeight: 600,
                letterSpacing: ".1rem",
              }}
            >
              Inspire Me!
            </Typography>
          </Button>
        </Grid>

        {/* Web Size User Icon */}
        <Grid
          item
          xs={1}
          md={1}
          sx={{
            display: { xs: "none", md: "flex" },
            ml: { md: 2 },
            justifyContent: "center",
          }}
        >
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User settings">
              <IconButton
                sx={{ p: 0 }}
                onClick={ user ? handleOpenUserMenu : () => navigate("/login")
                } 
              >
                <Avatar
                  alt={`${user ? `${user.name}` : ""}`}
                  src=""
                  sx={{ color: "black" }}
                />
              </IconButton>
            </Tooltip>
            <UserMenu 
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              handleUserItemClick={handleUserItemClick}
              handleLogoutClick={handleLogoutClick}
            />
          </Box>
        </Grid>

        {/* Web Size Favs Icon */}
        <Grid
          item
          xs={1}
          sx={{
            display: {
              xs: "none",
              md: `${user ? "flex" : "none"}`,
            },
            justifyContent: "center",
          }}
        >
          <Tooltip title="Favourites">
            <Link to="/user/favorites">
              <IconButton sx={{ p: 0 }}>
                <FavoriteBorderIcon
                  sx={{ 
                    margin: 1, 
                    color: "#FF7C24", 
                    fontSize: "35px" 
                  }}
                />
              </IconButton>
            </Link>
          </Tooltip>
        </Grid>

        {/* Web size cart icon */}
        <Grid
          item
          md={1}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cart">
            <Link to="/user/cart">
              <IconButton sx={{ p: 0 }}>
                <ShoppingCartOutlinedIcon
                  sx={{ margin: 1, color: "#FF7C24", fontSize: "35px" }}
                />
              </IconButton>
            </Link>
          </Tooltip>
        </Grid>

      </Grid>
    </>
  )
}

export default WebAppBar