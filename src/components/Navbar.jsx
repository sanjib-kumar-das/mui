import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
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

const Icons = styled(Box)(({ theme }) => ({}));

function Navbar() {
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
          <Avatar src="https://images.pexels.com/photos/3790797/pexels-photo-3790797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
