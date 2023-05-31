import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

// Create a custom theme with the desired primary color
const theme = createTheme({
  palette: {
    primary: {
      main: "#AC82E6", // Replace with your desired primary color
    },
  },
});

const MyComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <TextField label="Your Label" variant="outlined" />
      </div>
    </ThemeProvider>
  );
};

export default MyComponent;
