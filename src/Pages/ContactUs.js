import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ContactDetails from "../components/Contact/ContactDetails";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import ExtraHeader from "../components/Header/ExtraHeader";
import Header from "../components/Header/Header";

const ContactUs = () => {
  return (
    <div>
      <Header></Header>
      <ExtraHeader>
        <Typography variant='h3' sx={{ color: "white" }}>
          Contact Us
        </Typography>
        <Typography variant='h6' sx={{ color: "white" }}>
          Any query? contact us
        </Typography>
      </ExtraHeader>
      <Container sx={{ my: 5 }}>
        <Typography variant='h4' sx={{ textAlign: "center", fontWeight: 600 }}>
          Feel Free to contact Us For Any Query
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ContactForm></ContactForm>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ContactDetails></ContactDetails>
          </Grid>
        </Grid>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
