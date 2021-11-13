import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const Sitemap = () => {
  return (
    <div>
      <Typography variant='h4' sx={{ color: "White", textAlign: "center" }}>
        Site Map
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}>
        <NavLink to='/' style={{ textDecoration: "none" }}>
          <Button variant='text' sx={{ color: "White", my: 1 }}>
            Products
          </Button>
        </NavLink>
        <NavLink to='/about' style={{ textDecoration: "none" }}>
          <Button variant='text' sx={{ color: "White", my: 1 }}>
            About Us
          </Button>
        </NavLink>
        <NavLink to='/contact' style={{ textDecoration: "none" }}>
          <Button variant='text' sx={{ color: "White", my: 1 }}>
            Contact Us
          </Button>
        </NavLink>
      </Box>
    </div>
  );
};

export default Sitemap;
