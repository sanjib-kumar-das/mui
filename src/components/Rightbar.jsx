import { Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function Rightbar() {
  return (
    <Box
      flex={2}
      p={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={350}>
        <Typography variant="h6" fontWeight={300} mt={3} mb={2} >
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/7.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/8.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/9.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/10.jpg" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={300} mt={3} mb={2}>
          Uploaded Photos
        </Typography>
        <ImageList cols={3} gap={8}>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1549388604-817d15aa0110" alt="" loading="lazy"/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1525097487452-6278ff080c31" alt="" loading="lazy"/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1481277542470-605612bd2d61" alt="" loading="lazy"/>
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={300} mt={3} mb={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
