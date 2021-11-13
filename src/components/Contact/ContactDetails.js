// import { Typography } from '@material-ui/core';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactDetails = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 1 }}>
      <Typography variant='h3' sx={{ fontWeight: "bold" }}>
        Get In Touch
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant='h4' sx={{ fontWeight: "bold" }}>
          <RoomIcon sx={{ fontSize: 28 }} /> Gulshan 2
        </Typography>
        <Typography variant='h6'>Dhaka-1212</Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant='h4' sx={{ fontWeight: "bold" }}>
          <AccessTimeIcon sx={{ fontSize: 28 }} /> Working hours:
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: "bold" }}>
          Monday - Friday
        </Typography>
        <Typography variant='h6'>9.00 am – 7.00 pm</Typography>
        <Typography variant='h6' sx={{ fontWeight: "bold" }}>
          Saturday
        </Typography>
        <Typography variant='h6'>9.00 am – 4.00 pm</Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant='h4' sx={{ fontWeight: "bold" }}>
          <EmailIcon sx={{ fontSize: 28 }} /> admin@admin.com
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant='h4' sx={{ fontWeight: "bold" }}>
          <PhoneIcon sx={{ fontSize: 28 }} /> +88 01621214646
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactDetails;
