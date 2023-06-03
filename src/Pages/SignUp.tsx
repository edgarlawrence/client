import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Layout from "../Component/Layout";

const SignUp = () => {
  interface Option {
    id: number;
    nama: string;
  }

  interface IState {
    file: File | null;
    preview: string | null;
  }

  const initialState: IState = {
    file: null,
    preview: null,
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [retypePassword, setRetypePassword] = React.useState("");
  const [matchPass, setMatchPass] = React.useState(false);
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [citylist, setCitylist] = React.useState<readonly Option[] | null>(
    null
  );
  const [addCity, setAddCity] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [zipcode, setZipCode] = React.useState("");
  const [imageSrc, setImageSrc] = React.useState(initialState);
  const [showPassword, setShowPassword] = React.useState(false);
  const [activatedError, setActivatedError] = React.useState(false);

  const SignUnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (username === "" || password === "" || retypePassword === "") {
      setActivatedError(true);
    } else {
      setActivatedError(false);
      console.log(username, password);
    }
  };

  const passwordHandler = () => {
    setShowPassword((prevPass) => !prevPass);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc({
          file,
          preview: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const RegionAPI = async () => {
    await axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((res) => {
        setCitylist(res.data.provinsi);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    RegionAPI();
  }, []);

  return (
    <Layout>
      <div style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
        <Box className="titles">
          <Typography
            variant="h4"
            component="h1"
            textAlign="center"
            sx={{ my: 6 }}
          >
            Sign Up
          </Typography>
          <Box className="forms">
            <form>
              <div
                className="form-control"
                style={{ paddingTop: 10, paddingBottom: 10 }}
              >
                <label style={{ marginLeft: 10 }}> Enter Your Username</label>
                <TextField
                  error={activatedError ? true : false}
                  helperText={
                    activatedError ? "Please Enter Your Username" : ""
                  }
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
                <label style={{ marginLeft: 10 }}> Enter Your Password</label>
                <TextField
                  error={activatedError ? true : false}
                  helperText={
                    activatedError ? "Please Enter Your Password" : ""
                  }
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
              <div
                className="form-control"
                style={{ paddingTop: 10, paddingBottom: 10 }}
              >
                <label style={{ marginLeft: 10 }}> Retype Your Password</label>
                <TextField
                  error={activatedError ? true : false}
                  helperText={
                    activatedError
                      ? "Please Enter Your Password"
                      : password !== retypePassword
                      ? "your password is not match"
                      : ""
                  }
                  fullWidth
                  placeholder="Enter Your Password Here"
                  value={retypePassword}
                  type={showPassword === false ? "password" : "text"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setRetypePassword(event.target.value);
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
              <div
                className="form-control"
                style={{ paddingTop: 10, paddingBottom: 10 }}
              >
                <label style={{ marginLeft: 10 }}>
                  {" "}
                  Enter Your First Name{" "}
                </label>
                <TextField
                  error={activatedError ? true : false}
                  helperText={
                    activatedError ? "Please Enter Your First Name" : ""
                  }
                  fullWidth
                  placeholder="Enter Your First Name Here"
                  value={firstname}
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setFirstname(event.target.value);
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
                <label style={{ marginLeft: 10 }}> Enter Your Last Name </label>
                <TextField
                  error={activatedError ? true : false}
                  helperText={
                    activatedError ? "Please Enter Your Last Name" : ""
                  }
                  fullWidth
                  placeholder="Enter Your Last Name Here"
                  value={lastname}
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setLastname(event.target.value);
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
                <label style={{ marginLeft: 10 }}> Select Your City </label>
                <Autocomplete
                  disablePortal
                  id="city-select"
                  options={citylist || []}
                  getOptionLabel={(option: Option) => option.nama}
                  sx={{
                    p: 1,
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth={true}
                      placeholder="pilih kota"
                      helperText={
                        activatedError ? "Please Enter Your City" : ""
                      }
                      value={addCity}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setAddCity(event.target.value);
                      }}
                    />
                  )}
                />
              </div>
              <div
                className="form-control"
                style={{ paddingTop: 10, paddingBottom: 10 }}
              >
                <label style={{ marginLeft: 10 }}> Enter Your Address </label>
                <TextField
                  error={activatedError ? true : false}
                  helperText={activatedError ? "Please Enter Your Address" : ""}
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Enter Your Address Here"
                  value={address}
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setAddress(event.target.value);
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
                <label style={{ marginLeft: 10 }}> Enter Your Zip Code </label>
                <TextField
                  error={activatedError ? true : false}
                  helperText={
                    activatedError ? "Please Enter Your Zip Code" : ""
                  }
                  fullWidth
                  placeholder="Enter Your Zip Code Here"
                  value={zipcode}
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setZipCode(event.target.value);
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
                <label style={{ marginLeft: 10 }}> Enter Your ID Card </label>
                <Button variant="contained" component="label" sx={{ ml: 3 }}>
                  Upload
                  <input
                    hidden
                    accept="image/*"
                    id="fileInput"
                    name="file"
                    type="file"
                    onChange={handleFileChange}
                  />
                </Button>
                {activatedError ? (
                  <label style={{ color: "red", marginLeft: 10 }}>
                    Please Enter Your ID Card
                  </label>
                ) : null}
                <br />
                {imageSrc.preview && (
                  <Box sx={{ m: 3 }}>
                    <img
                      src={imageSrc.preview}
                      alt="Uploaded image"
                      style={{ maxWidth: "70%" }}
                    />
                  </Box>
                )}
              </div>
              <Box className="buttons-cta" sx={{ my: 6 }}>
                <Button
                  onClick={SignUnHandler}
                  variant="contained"
                  fullWidth
                  sx={{ m: 1 }}
                >
                  Register
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </div>
    </Layout>
  );
};

export default SignUp;
