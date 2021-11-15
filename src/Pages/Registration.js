import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ExtraHeader from "../components/Header/ExtraHeader";
import {
  Button,
  Container,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Registration = () => {
  const [registerData, setRegisterData] = useState({});
  const { user, googleSignIn, emailSignUp, error, isLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn(history, location);
  };
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newData = { ...registerData };
    newData[field] = value;

    setRegisterData(newData);
  };

  const handleOnSubmit = (e) => {
    emailSignUp(
      registerData?.email,
      registerData?.password,
      registerData?.name,
      location,
      history
    );
    e.preventDefault();
  };
  return (
    <div>
      <Header></Header>
      <ExtraHeader>
        <Typography variant='h3' sx={{ color: "white" }}>
          HELLO THERE ABOUT
        </Typography>
        <Typography variant='h6' sx={{ color: "white" }}>
          we are in about page
        </Typography>
      </ExtraHeader>
      <Typography variant='h3' sx={{ mt: 5, textAlign: "center" }}>
        Registration Form
      </Typography>
      <Container>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "60%" },
            textAlign: "center",
            my: 3,
          }}>
          {!isLoading && (
            <form
              onSubmit={handleOnSubmit}
              style={{ width: "100%", marginTop: "15px", textAlign: "center" }}>
              {/* register your input into the hook by invoking the "register" function */}
              <TextField
                label='Name'
                onBlur={handleOnBlur}
                name='name'
                variant='outlined'
              />
              <br />
              <TextField
                name='email'
                label='Email'
                onBlur={handleOnBlur}
                type='email'
                variant='outlined'
              />
              <br />
              <TextField
                name='password'
                label='Password'
                onBlur={handleOnBlur}
                type='password'
                variant='outlined'
              />
              <br />

              <Button
                type='submit'
                style={{
                  color: "white",
                  width: "50%",
                  height: "40px",
                  backgroundColor: "#1ba370",
                  marginTop: "15px",
                }}>
                Submit
              </Button>
            </form>
          )}
          <Box>
            {user?.email && (
              <Alert severity='success' sx={{ textAlign: "center" }}>
                Your Account created successfully.
              </Alert>
            )}
            {isLoading && <CircularProgress sx={{ textAlign: "center" }} />}
            <Typography variant='h4' sx={{ color: "red", textAlign: "center" }}>
              {error}
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Link to='/login' style={{ textDecoration: "none" }}>
              <Button variant='text'>Already have an Account?</Button>
            </Link>
            <Button variant='contained' onClick={handleGoogleSignIn}>
              Google Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Registration;
