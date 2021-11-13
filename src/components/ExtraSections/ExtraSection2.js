import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const ExtraSection2 = () => {
  return (
    <Box sx={{ backgroundColor: "#1ba371", py: 5 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{ textAlign: "center", color: "white" }}>
            <DeliveryDiningIcon style={{ fontSize: "60px" }} />
            <Typography variant='h5'>Free Shipping</Typography>
            <Typography variant='p'>Free shipping on all order</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{ textAlign: "center", color: "white" }}>
            <AttachMoneyIcon style={{ fontSize: "60px" }} />
            <Typography variant='h5'>Money Return</Typography>
            <Typography variant='p'>30 days for free return</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{ textAlign: "center", color: "white" }}>
            <SupportAgentIcon style={{ fontSize: "60px" }} />
            <Typography variant='h5'>Online Support</Typography>
            <Typography variant='p'>Support 24 hours a day</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExtraSection2;
