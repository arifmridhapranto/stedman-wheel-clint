import React from "react";
import Sitemap from "./Sitemap";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Footer1 from "./Footer1";
import Footer4 from "./Footer4";
import Footer2 from "./Footer2";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1ba371", height: "100%" }}>
      <Grid container spacing={1} sx={{ pt: 4 }}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Footer1></Footer1>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Footer2></Footer2>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Sitemap></Sitemap>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Footer4></Footer4>
        </Grid>
      </Grid>
      <CopyRight></CopyRight>
    </Box>
  );
};

export default Footer;
