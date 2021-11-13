import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const styles = {
    background: `url("https://i.ibb.co/pwGtcfS/asset-63.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
  };
  return (
    <Box style={styles}>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}>
        <Typography variant='h2' sx={{ fontWeight: "bold" }}>
          FIND A <span style={{ color: "#1ba371" }}>HIGH</span>
          <br /> <span style={{ color: "#1ba371" }}>QUALITY</span> BIKE
          <br /> AND SHOP NOW
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link
            to='/products'
            style={{ textDecoration: "none", color: "white" }}>
            <Button variant='contained' sx={{ mr: 2 }} size='large'>
              Explore More
            </Button>
          </Link>
          <Link to='/about' style={{ textDecoration: "none", color: "white" }}>
            <Button variant='outlined' size='large'>
              About Us
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
