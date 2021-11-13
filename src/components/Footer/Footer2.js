import React from "react";
import { Box, Typography } from "@mui/material";

const Footer2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mx: "auto",
        textAlign: "center",
        color: "white",
      }}>
      <Typography variant='h4'>Shop By</Typography>
      <Typography variant='h6' sx={{ my: 1 }}>
        Your Orders
      </Typography>
      <Typography variant='h6' sx={{ my: 1 }}>
        Your Wishlist
      </Typography>
      <Typography variant='h6' sx={{ my: 1 }}>
        Payments
      </Typography>
      <Typography variant='h6' sx={{ my: 1 }}>
        Delivery
      </Typography>
    </Box>
  );
};

export default Footer2;
