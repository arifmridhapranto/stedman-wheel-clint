import { CircularProgress, Container, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gentle-dusk-82174.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <Container sx={{ my: 5 }}>
      <Typography
        variant='h4'
        sx={{
          color: "#1ba371",
          fontWeight: "bold",
          textAlign: "center",
          my: 3,
        }}>
        Our Products
      </Typography>
      {products.length ? (
        <Grid container spacing={4}>
          {products.slice(0, 6).map((product) => (
            <SingleProduct product={product} key={product._id}></SingleProduct>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

export default ProductsSection;
