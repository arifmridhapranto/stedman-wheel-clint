import { Grid, Typography, CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const OurMission = () => {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            backgroundColor: "#1ba371",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}>
          <Typography variant='h2' sx={{ color: "white", fontWeight: "bold" }}>
            Our Mission
          </Typography>
          <Typography variant='h6' sx={{ color: "white", mx: 2 }}>
            We’re a bike shop, a family and a team of riders, helping folks in
            New York explore their passion for cycling. Biking is more than
            transportation or exercise, it’s a lifestyle. Whether you need help
            with where to ride or are in need.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CardMedia
            width='70%'
            component='img'
            image='https://i.ibb.co/JF96LT5/image-copyright-20.jpg'
            alt='Page Heading'></CardMedia>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurMission;
