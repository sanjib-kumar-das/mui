import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Fade,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HikingIcon from "@mui/icons-material/Hiking";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "whitesmoke",
  padding: "0 1rem",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  gap:"2rem",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display:"flex",
  gap:"1rem",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          SocioHike
        </Typography>
        <HikingIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          {" "}
          <InputBase placeholder="Search..." />{" "}
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsActiveIcon />
          </Badge>
          <Avatar src="https://images.pexels.com/photos/3790797/pexels-photo-3790797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" sx={{height:"30", width:"30"}} onClick={e=>setOpen(true)}/>
        </Icons>
        <UserBox onClick={e=>setOpen(true)}><Avatar src="https://images.pexels.com/photos/3790797/pexels-photo-3790797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
