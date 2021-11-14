import { CardMedia, Container, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container sx={{ textAlign: "center" }}>
      <CardMedia
        component='img'
        alt='green iguana'
        image={"https://i.ibb.co/VVcRcRW/2446911-ai.png"}
      />
      <Link to='/' style={{ textDecoration: "none" }}>
        <Button variant='contained'>Go Home Page</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
<h2>Page not found</h2>;
