import { Fab, IconButton, Tooltip } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

function Add() {
  return (
    <>
      <Tooltip title="Add post" sx={{position:"fixed", bottom:10, left:10}}>
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
}

export default Add;
