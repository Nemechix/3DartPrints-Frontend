import { Menu, MenuItem, Typography } from "@mui/material"

const settings = [
  {
    name: 'Profile', 
    url: '/profile'
  },
  {
    name: 'Upload', 
    url: '/upload'
  },
  {
    name: 'Dashboard',
    url: '/'
  }
]

function UserMenu({ anchorElUser, handleCloseUserMenu, handleUserItemClick, handleLogoutClick }) {
  return (

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
        <MenuItem key={setting.name} onClick={() => {handleUserItemClick(setting.url)}}>
          <Typography textAlign="center">{setting.name}</Typography>
        </MenuItem>
      ))}
      
      <MenuItem onClick={handleLogoutClick}>
        <Typography textAlign="center">Logout</Typography>
      </MenuItem>

    </Menu>

  )
}

export default UserMenu