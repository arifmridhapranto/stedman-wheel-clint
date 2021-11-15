import React, { useEffect, useState } from "react";
import { Button, Container, Typography, CardMedia } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../hooks/useAuth";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    fetch("https://gentle-dusk-82174.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleUpdateStatus = (id) => {
    const newData = { status: "Approved" };
    const url = `https://gentle-dusk-82174.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Order is Approved");
        }
      });
  };
  const handleDeleteProduct = (id) => {
    const url = `https://gentle-dusk-82174.herokuapp.com/orders/${id}`;
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
        Manage All Orders: {orders.length}
      </Typography>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align='center'>User Name</TableCell>
                <TableCell align='center'>Product Name</TableCell>
                <TableCell align='center'>Price</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Status</TableCell>
                <TableCell align='center'>Update Status</TableCell>
                <TableCell align='center'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
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
                  <TableCell align='center'>{user.displayName}</TableCell>
                  <TableCell align='center'>{order.productName}</TableCell>
                  <TableCell align='center'>{order.price}</TableCell>
                  <TableCell align='center'>{order.email}</TableCell>
                  <TableCell align='center'>{order.status}</TableCell>
                  <TableCell align='center'>
                    <Button onClick={() => handleUpdateStatus(order._id)}>
                      Update Status
                    </Button>
                  </TableCell>
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

export default ManageAllOrders;
