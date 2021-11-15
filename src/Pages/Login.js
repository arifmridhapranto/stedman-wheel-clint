import {
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import ExtraHeader from "../components/Header/ExtraHeader";
import Header from "../components/Header/Header";
import { Link, useHistory, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { user, googleSignIn, error, emailSignIn, isLoading } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn(history, location);
  };
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newData = { ...loginData };
    newData[field] = value;
    console.log(newData);
    setLoginData(newData);
  };

  const handleOnSubmit = (e) => {
    emailSignIn(loginData?.email, loginData?.password, location, history);
    e.preventDefault();
  };
  return (
    <div>
      <Header></Header>
      <ExtraHeader>
        <Typography variant='h3' sx={{ color: "white" }}>
          HELLO THERE Login
        </Typography>
        <Typography variant='h6' sx={{ color: "white" }}>
          we are in Login page
        </Typography>
      </ExtraHeader>
      <Typography variant='h3' sx={{ mt: 5, textAlign: "center" }}>
        Please Login
      </Typography>
      <Container>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "60%" },
            textAlign: "center",
            my: 3,
          }}>
          <form
            onSubmit={handleOnSubmit}
            style={{ width: "100%", marginTop: "15px", textAlign: "center" }}>
            {/* register your input into the hook by invoking the "register" function */}

            {/* include validation with required or other standard HTML validation rules */}
            <TextField
              id='outlined-basic'
              name='email'
              label='Email'
              type='email'
              onBlur={handleOnBlur}
              variant='outlined'
            />
            <br />

            <TextField
              id='outlined-basic2'
              label='Password'
              name='password'
              type='password'
              onBlur={handleOnBlur}
              variant='outlined'
            />
            <br />
            {error}
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
          <Box>
            {user?.email && (
              <Alert severity='success' sx={{ textAlign: "center" }}>
                Logged In successfully.
              </Alert>
            )}
            {isLoading && <CircularProgress sx={{ textAlign: "center" }} />}
            <Typography variant='h4' sx={{ color: "red", textAlign: "center" }}>
              {error}
            </Typography>
          </Box>
          <Typography variant='h4' sx={{ color: "red" }}>
            {error}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Link to='/registration' style={{ textDecoration: "none" }}>
              <Button variant='text'>New User?</Button>
            </Link>
            <Button variant='contained' onClick={handleGoogleSignIn}>
              Google Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Login;
