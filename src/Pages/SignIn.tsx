import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { act } from "react-dom/test-utils";

const SignIn = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [activatedError, setActivatedError] = React.useState(false);

  const passwordHandler = () => {
    setShowPassword((prevPass) => !prevPass);
  };

  const SignInHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setActivatedError(true);
    } else {
      setActivatedError(false);
      console.log(username, password);
    }
  };

  return (
    <Box sx={{ py: "2rem" }}>
      <Box className="title" sx={{ py: 7 }}>
        <Typography variant="h4" component="h1" textAlign="center">
          {" "}
          Sign In{" "}
        </Typography>
      </Box>
      <Box
        className="forms"
        sx={{
          border: 1,
          width: "50%",
          mx: "auto",
          p: 3,
          borderRadius: "10px",
          borderColor: "lightgrey",
          boxShadow: 1,
        }}
      >
        <form>
          <div
            className="form-control"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <label style={{ marginLeft: 10 }}> Enter Username</label>
            <TextField
              error={activatedError ? true : false}
              helperText={activatedError ? "Please Enter Your Username" : ""}
              fullWidth
              placeholder="Enter Your Username Here"
              value={username}
              type="text"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(event.target.value);
              }}
              sx={{
                p: 1,
              }}
            />
          </div>
          <div
            className="form-control"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <label style={{ marginLeft: 10 }}> Enter Password</label>
            <TextField
              error={activatedError ? true : false}
              helperText={activatedError ? "Please Enter Your Password" : ""}
              fullWidth
              placeholder="Enter Your Password Here"
              value={password}
              type={showPassword === false ? "password" : "text"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
              sx={{
                p: 1,
              }}
            />
            <Box
              className="show-pass-icon"
              sx={{
                float: "right",
                position: "relative",
                bottom: activatedError ? "4.7rem" : "3.5rem",
                left: "0.5rem",
              }}
            >
              {showPassword === false ? (
                <Button variant="text" onClick={passwordHandler}>
                  <VisibilityIcon sx={{ color: "black" }} />
                </Button>
              ) : (
                <Button variant="text" onClick={passwordHandler}>
                  <VisibilityOffIcon sx={{ color: "black" }} />
                </Button>
              )}
            </Box>
          </div>
          <Box className="buttons-cta">
            <Button
              onClick={SignInHandler}
              variant="contained"
              fullWidth
              sx={{ m: 1 }}
            >
              Sign In
            </Button>
            <Button variant="outlined" fullWidth sx={{ m: 1 }}>
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
