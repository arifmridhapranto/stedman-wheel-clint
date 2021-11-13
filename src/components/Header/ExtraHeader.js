import React from "react";
import { Box } from "@mui/system";
import { Grid, CardMedia } from "@mui/material";

const ExtraHeader = ({ children }) => {
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
          {children}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CardMedia
            component='img'
            image='https://i.ibb.co/PDZYgJp/asset-35.jpg'
            alt='Page Heading'
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExtraHeader;
