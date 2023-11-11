import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import FeedbackIcon from '@mui/icons-material/Feedback';
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Post() {
  const labels= [10, 100, 200, 300, 400, 500];
  const data = {
    labels,
    datasets:[
      {
        label: "No. of feedback",
        data: [5, 90, 127, 11, 303, 205],
        backgroundColor: "#000",
        borderColor: "#000",
      },
      {
        label: "Category weight",
        data: [15, 10, 311, 111, 33, 105],
        backgroundColor: "#eee",
        borderColor: "#eee",
      }
    ]
  }
  return (
    <Card sx={{margin:3}}>
      <CardHeader
        avatar={
          // <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src="https://mui.com/static/images/avatar/7.jpg">
          // </Avatar>
          <FeedbackIcon />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Feedback Category Context"
        subheader="September 14, 2016 - Present"
      />
      {/* <CardMedia
        component="img"
        height="350"
        image="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Paella dish"
      /> */}
      <Box sx={{px:3, py:1}}></Box>
        <Typography variant='h6'></Typography>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
