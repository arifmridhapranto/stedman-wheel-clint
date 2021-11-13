import { Box, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Footer4 = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant='h4' sx={{ color: "white" }}>
        Contact
      </Typography>
      <Typography variant='h6' sx={{ color: "white", my: 1 }}>
        <LocationOnIcon /> Gulshan,Dhaka-1212
      </Typography>
      <Typography variant='h6' sx={{ color: "white", my: 1 }}>
        <PhoneIcon /> +8801866554488
      </Typography>
      <Typography variant='h6' sx={{ color: "white", my: 1 }}>
        <EmailIcon /> admin@stedmanwheel.com
      </Typography>
    </Box>
  );
};

export default Footer4;
