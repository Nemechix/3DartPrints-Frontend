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
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { Grid, TextField } from '@mui/material';

const pages = ['Random', 'Search'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  return (
    <AppBar position="static"
      sx={{ backgroundColor: '#F9DEC9' }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', flexWrap: 'wrap' }} disableGutters>
          <Grid container 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              margin: '3% 0 0 0'
            }}
          >
            {/* Web Size Icon & Title */}
            <Grid item md={1}
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
                  // color: 'inherit',
                  textDecoration: 'none',
              }}
              >
                RebootAdvice
              </Typography>
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
                href=""
                sx={{
                  mr:0,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  // color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                3DArtPrints
              </Typography>
            </Grid>

            {/* Smartphone Size InspireMe Icon */}
            <Grid item xs={1}
              sx={{ display: {xs: 'flex', md: 'none'} }}
            >
              <Tooltip title="Inspire Me!">
                <IconButton sx={{ p: 0 }}>
                  <AutoFixHighIcon sx={{ margin: 1 }}/>
                </IconButton>
              </Tooltip>
            </Grid>

            {/* Smartphone Size Favs Icon */}
            <Grid item xs={1}
              sx={{ display: {xs: 'flex', md: 'none'} }}
            >
              <Tooltip title="Favourites">
                <IconButton sx={{ p: 0 }}>
                  <FavoriteBorderIcon sx={{ margin: 1 }}/>
                </IconButton>
              </Tooltip>
            </Grid>

            {/* Web Size Menu */}
            <Grid item md={1}
              sx={{ display: {xs: 'none', md:'flex'} }}
            >
              <Box sx={{ flexGrow: 1, justifyContent: 'right', display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Grid>

            {/* User Icon */}
            <Grid item xs={1}>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" 
                      sx={{ color: 'black' }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
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
              </Box>
            </Grid>

            {/* Smartphone Size Cart Icon */}
            <Grid item xs={1}
              sx={{ display: {xs: 'flex', md: 'none'} }}
            >
              <Tooltip title="Cart">
                <IconButton sx={{ p: 0 }}>
                  <ShoppingCartOutlinedIcon sx={{ margin: 1 }}/>
                </IconButton>
              </Tooltip>
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>

            {/* Search Input */}
            <Grid item xs={10}>
              <TextField 
                sx={{ 
                  flexGrow: 3, 
                  width: '100%',
                  margin: '3% 0'
                }}
                id="searchBarInput" 
                label="Search" 
                variant="filled" 
              />
            </Grid>
            
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;