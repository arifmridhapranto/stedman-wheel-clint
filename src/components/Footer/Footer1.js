import { Container, Typography } from "@mui/material";
import React from "react";

const Footer1 = () => {
  return (
    <Container>
      <Typography variant='h4' sx={{ color: "white", textAlign: "center" }}>
        Stedman Wheel
      </Typography>
      <Typography variant='p'>
        Welcome to Stedman wheel! We are one of the biggest bicycle-families in
        the world. Our services include all types of repair, search of a perfect
        bike for every customer, sport events organization and much more. Join
        our community and become a part of the bike-family.
      </Typography>
    </Container>
  );
};

export default Footer1;
