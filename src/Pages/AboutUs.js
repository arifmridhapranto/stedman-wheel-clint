import { Typography } from "@mui/material";
import React from "react";
import OurHistory from "../components/About/OurHistory";
import OurMission from "../components/About/OurMission";
import Footer from "../components/Footer/Footer";
import ExtraHeader from "../components/Header/ExtraHeader";
import Header from "../components/Header/Header";

const AboutUs = () => {
  return (
    <div>
      <Header></Header>
      <ExtraHeader>
        <Typography variant='h3' sx={{ color: "white" }}>
          About US
        </Typography>
        <Typography variant='h6' sx={{ color: "white" }}>
          About Our company and works
        </Typography>
      </ExtraHeader>
      <OurHistory></OurHistory>
      <OurMission></OurMission>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
