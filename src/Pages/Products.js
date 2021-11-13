import { Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";
import ExtraHeader from "../components/Header/ExtraHeader";
import Header from "../components/Header/Header";

const Products = () => {
  return (
    <div>
      <Header></Header>
      <ExtraHeader>
        <Typography variant='h3' sx={{ color: "white" }}>
          Our products
        </Typography>
        <Typography variant='h6' sx={{ color: "white" }}>
          Select your favorite product
        </Typography>
      </ExtraHeader>
      <h2>All Products here </h2>
      <Footer></Footer>
    </div>
  );
};

export default Products;
