import React, { useState, useEffect } from "react";
import { Button, Container, Typography, CardMedia } from "@mui/material";
import useAuth from "../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const url = `http://localhost:9000/orders/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyOrders(data);
      });
  }, [myOrders]);
  const handleDeleteProduct = (id) => {
    console.log(id);
    const url = `http://localhost:9000/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
        My Orders: {myOrders.length}
      </Typography>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Product Name</TableCell>
                <TableCell align='center'>Price</TableCell>
                <TableCell align='center'>Status</TableCell>
                <TableCell align='center'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myOrders.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    <CardMedia
                      component='img'
                      alt='green iguana'
                      height='100'
                      image={order.img}
                    />
                  </TableCell>
                  <TableCell align='center'>{order.email}</TableCell>
                  <TableCell align='center'>{order.productName}</TableCell>
                  <TableCell align='center'>{order.price}</TableCell>
                  <TableCell align='center'>{order.status}</TableCell>
                  <TableCell align='center'>
                    <Button onClick={() => handleDeleteProduct(order._id)}>
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

export default MyOrders;
