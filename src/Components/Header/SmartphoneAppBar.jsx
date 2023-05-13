import { Avatar, Box, Grid, IconButton, Menu, MenuItem, TextField, Tooltip, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useState } from "react";
import UserMenu from "./UserMenu";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useAppContext } from '../../Context/appContext';
import { Badge } from "@mui/material";

const pages = ['Pokemon', 'Cocina', 'Marvel', 'Dc', 'Naruto', 'Digimon', 'Lego'];

function SmartphoneAppBar({ user, setUser, setOpenLoginPopup }) {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const { cart } = useAppContext()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function handleMenuItemClick(categoryId) {
    handleCloseNavMenu()
    navigate(`/category/${categoryId}`);
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenLoginMenu = () => {
    setOpenLoginPopup(true)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleUserItemClick(link) {
    handleCloseUserMenu()
    navigate(link)
  }

  function handleLogoutClick() {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('favorites')
    handleCloseUserMenu()
    setUser(null)
    navigate('/')
  }


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
        {/* Smartphone Size Menu */}
        <Grid
          item
          xs={1}
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
          }}
        >
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

        {/* Smartphone Size Icon & Title */}
        <Grid
          item
          xs={2}
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
          }}
        >
          {/* Icon */}
          <Link to="/">
            <img
              src="https://i.postimg.cc/ncz4v9FJ/LOGO2.png"
              alt="LOGO"
              style={{ height: 39 }}
            />
          </Link>

        </Grid>

        {/* Smartphone Size Search Input */}
        <Grid
          item
          xs
          sx={{
            display: { xs: "flex", md: "none" },
            px: 1,
            my: 0,
          }}
        >
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: 15,
              width: "100%",
            }}
            id="smartphoneSearchBarInput"
            label="Search"
            variant="outlined"
          />
        </Grid>

        {/* Smartphone Size InspireMe Icon */}
        <Grid
          item
          xs={user ? 1 : 3}
          sx={{
            display: { xs: "none", md: "none" },
            justifyContent: `${user ? "center" : "left"}`,
          }}
        >
          <Tooltip title="Inspire Me!">
            <IconButton sx={{ p: 0 }}>
              <AutoFixHighIcon sx={{ margin: 1 }} />
            </IconButton>
          </Tooltip>
        </Grid>

        {/* Smartphone Size User Icon */}
        <Grid
          item
          xs={1}
          md={1}
          sx={{
            display: { xs: "flex", md: "none" },
            ml: { md: 2 },
            mx: 1,
            justifyContent: "center",
          }}
        >
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User settings">
              <IconButton
                sx={{ p: 0 }}
                onClick={user ? handleOpenUserMenu : handleOpenLoginMenu} 
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

        {/* Smartphone Size Favs Icon */}
        <Grid
          item
          xs={1}
          sx={{
            display: {
              xs: `${user ? "flex" : "none"}`,
              md: "none",
            },
            justifyContent: "center",
          }}
        >
          <Tooltip title="Favourites">
            <Link to="/user/favorites">
              <IconButton sx={{ p: 0 }}>
                <FavoriteBorderIcon
                  sx={{ margin: 1, color: "#FF7C24", fontSize: "25px" }}
                />
              </IconButton>
            </Link>
          </Tooltip>
        </Grid>

        {/* Smartphone Size Cart Icon */}
        <Grid
          item
          xs={1}
          sx={{
            display: {
              xs: `${user ? "flex" : "flex"}`,
              md: "none",
            },
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cart">
            <Link to="/user/cart">
              <Badge badgeContent={cart.length} color="primary">
                <IconButton sx={{ p: 0 }}>
                  <ShoppingCartOutlinedIcon
                    sx={{ color: "#FF7C24", fontSize: "25px" }}
                  />
                </IconButton>
              </Badge>
            </Link>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  )
}

export default SmartphoneAppBar