import { TextField } from "@mui/material";
// import Box from "@mui/material/Box";
import React from "react";

const TextComponents = (props) => {
  return (
    // <Box
    //   component="form"
    //   sx={{
    //     "& > :not(style)": { m: 1, width: "auto" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    <TextField
      id="outlined"
      label={props.label}
      type={props.type}
      autoComplete="current-email"
      fullWidth
    ></TextField>
    // </Box>
  );
};

export default TextComponents;
