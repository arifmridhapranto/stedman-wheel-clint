import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: "#1ba370" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Typography
                variant='h4'
                sx={{ flexGrow: 1, color: "text.primary" }}>
                <NavLink
                  to='/'
                  style={{ textDecoration: "none", color: "white" }}>
                  Stedman Wheel
                </NavLink>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={8}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}>
                <NavLink to='/products' style={{ textDecoration: "none" }}>
                  <Button variant='text' sx={{ color: "white", fontSize: 18 }}>
                    Products
                  </Button>
                </NavLink>
                <Link to='/about' style={{ textDecoration: "none" }}>
                  <Button variant='text' sx={{ color: "white", fontSize: 18 }}>
                    About Us
                  </Button>
                </Link>

                <NavLink to='/contact' style={{ textDecoration: "none" }}>
                  <Button variant='text' sx={{ color: "white", fontSize: 18 }}>
                    Contact Us
                  </Button>
                </NavLink>
                <Box>
                  {user?.email ? (
                    <Box>
                      <Typography variant='text' sx={{ color: "black" }}>
                        {user.displayName}
                      </Typography>
                      <NavLink
                        to='/dashboard'
                        style={{ textDecoration: "none" }}>
                        <Button
                          variant='text'
                          sx={{ color: "white", fontSize: 18 }}>
                          Dashboard
                        </Button>
                      </NavLink>
                      <Button
                        onClick={logOut}
                        variant='contained'
                        sx={{ color: "white", fontSize: 18 }}>
                        Log Out
                      </Button>
                    </Box>
                  ) : (
                    <Box>
                      <NavLink to='/login' style={{ textDecoration: "none" }}>
                        <Button
                          variant='text'
                          sx={{ color: "white", fontSize: 18 }}>
                          Login
                        </Button>
                      </NavLink>
                      <NavLink
                        to='/registration'
                        style={{ textDecoration: "none" }}>
                        <Button
                          variant='text'
                          sx={{ color: "white", fontSize: 18 }}>
                          Registration
                        </Button>
                      </NavLink>
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
