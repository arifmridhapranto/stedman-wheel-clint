import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid, Rating } from "@mui/material";
import { Link } from "react-router-dom";

const SingleProduct = (props) => {
  const { _id, img, name, price, rating, description } = props.product;

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card>
        <CardMedia
          component='img'
          height='250'
          image={img}
          alt='green iguana'
        />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              ${price}
            </Typography>
          </Box>
          <Typography variant='body2' color='text.secondary'>
            {description.slice(0, 100)}
          </Typography>
          <Typography component='h5'>
            Rating:
            <Rating
              name='half-rating-read'
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={`/purchase/${_id}`} style={{ textDecoration: "none" }}>
            <Button size='medium' variant='contained'>
              Purchase Now
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
