import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardMedia from "@mui/material/CardMedia";

const ExtraSection1 = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <CardMedia
            component='img'
            alt='green iguana'
            image='https://i.ibb.co/3Y14fhz/asset-20.jpg'
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <CardMedia
            component='img'
            alt='green iguana'
            image='https://i.ibb.co/xsbhkVH/asset-21.jpg'
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExtraSection1;
