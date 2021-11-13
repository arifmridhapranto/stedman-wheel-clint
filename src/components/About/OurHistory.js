import { CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const OurHistory = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CardMedia
            component='img'
            image='https://i.ibb.co/93WqwGV/image-copyright-18.jpg'
            alt='Page Heading'
          />
        </Grid>
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
            Our History
          </Typography>
          <Typography variant='h6' sx={{ color: "white", mx: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            odit repudiandae sunt amet, ratione quae a sed ipsa nesciunt eos
            veniam illum iure facere voluptas! Non assumenda molestiae fuga
            exercitationem.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurHistory;
