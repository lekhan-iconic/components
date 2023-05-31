import "./App.css";
import BasicText from "./components/BasicText";
import TextComponents from "./components/TextComponents";
import BottonComponent from "./components/BottonComponent";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      {/* Your content goes here */}
      <div>
        <div className="icon">
          <ImageComponent />
        </div>
        <Stack spacing={2} minWidth={300}>
          <div className="title">
            <BasicText title="Welcome Back" />
          </div>
          <TextComponents type="email" label="Email" />
          <TextComponents type="password" label="Password" />
          <BottonComponent name="Sign In" />
          <span className="Custom-span">
            Don't have Account?{" "}
            <a href="https://google.com">
              <span className="link-span">Sign Up</span>
            </a>
          </span>
          <div className="divider-container">
            <div className="divider"></div>
            <span className="divider-text">OR</span>
            <div className="divider"></div>
          </div>
          <Stack spacing={2} direction="row" justifyContent="space-around">
            <ImageComponent />
            <ImageComponent />
            <ImageComponent />
          </Stack>
        </Stack>
      </div>
    </Box>
  );
}

export default App;
