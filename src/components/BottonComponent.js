import { Button } from "@mui/material";
import React from "react";

const BottonComponent = (props) => {
  return (
    <div>
      <Button variant="contained" fullWidth>
        {" "}
        {props.name}
      </Button>
    </div>
  );
};

export default BottonComponent;
