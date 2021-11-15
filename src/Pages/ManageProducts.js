import { Typography, Container, Button, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gentle-dusk-82174.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);
  const handleDeleteProduct = (id) => {
    const url = `https://gentle-dusk-82174.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Are you sure to delete Product?");
        }
      });
  };

  return (
    <div>
      <Typography
        variant='h4'
        sx={{
          color: "#1ba371",
          fontWeight: "bold",
          textAlign: "center",
          my: 3,
        }}>
        Manage All Products: {products.length}
      </Typography>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Price</TableCell>
                <TableCell align='center'>Description</TableCell>
                <TableCell align='center'>Update</TableCell>
                <TableCell align='center'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    <CardMedia
                      component='img'
                      alt='green iguana'
                      height='100'
                      image={product.img}
                    />
                  </TableCell>
                  <TableCell align='center'>{product.name}</TableCell>
                  <TableCell align='center'>{product.price}</TableCell>
                  <TableCell align='center'>{product.description}</TableCell>
                  <TableCell align='center'>
                    <Link to={`productupdate/${product._id}`}>
                      <Button>Update</Button>
                    </Link>
                  </TableCell>
                  <TableCell align='center'>
                    <Button onClick={() => handleDeleteProduct(product._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default ManageProducts;
