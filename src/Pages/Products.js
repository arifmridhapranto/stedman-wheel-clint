import { Container, Typography, CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import ExtraHeader from "../components/Header/ExtraHeader";
import Header from "../components/Header/Header";
import SingleProduct from "../components/SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gentle-dusk-82174.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
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
            {products.map((product) => (
              <SingleProduct
                product={product}
                key={product._id}></SingleProduct>
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
      <Footer></Footer>
    </div>
  );
};

export default Products;
