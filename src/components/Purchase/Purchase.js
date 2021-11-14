import { Typography, Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExtraHeader from "../Header/ExtraHeader";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";

const Purchase = () => {
  const [purchaseProduct, setPurchaseProduct] = useState({});
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchaseProduct(data));
  }, [id]);
  const onSubmit = (data) => {
    const image = purchaseProduct?.img;
    console.log(image);
    const newData = {
      ...data,
      status: "pending",
      img: image,
    };
    console.log(newData);
    fetch("http://localhost:9000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("your Order is Added");
        }
      });
  };

  return (
    <Box>
      <Header />
      <ExtraHeader>
        <Typography variant='h3' sx={{ color: "white" }}>
          Confirm your purchase
        </Typography>
        <Typography variant='h6' sx={{ color: "white" }}>
          Fill the form and confirm your purchase
        </Typography>
      </ExtraHeader>
      <Typography
        variant='h4'
        sx={{
          color: "#1ba371",
          fontWeight: "bold",
          textAlign: "center",
          my: 3,
        }}>
        Your Product is: {purchaseProduct.name}
      </Typography>

      <Container sx={{ textAlign: "center", my: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            readOnly
            defaultValue={user?.displayName}
            {...register("name")}
            style={{ width: "50%", height: "25px", marginTop: "20px" }}
          />
          <br />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            readOnly
            defaultValue={user?.email}
            {...register("email")}
            style={{ width: "50%", height: "25px", marginTop: "20px" }}
          />
          <br />
          <input
            defaultValue={purchaseProduct?.name}
            {...register("productName")}
            readOnly
            style={{ width: "50%", height: "25px", marginTop: "20px" }}
          />
          <br />
          <input
            defaultValue={purchaseProduct?.price}
            {...register("price")}
            readOnly
            style={{ width: "50%", height: "25px", marginTop: "20px" }}
          />
          <br />
          <input
            {...register("Phone Number", { required: true })}
            placeholder='Phone Number'
            style={{ width: "50%", height: "25px", marginTop: "20px" }}
          />
          <br />
          <input
            {...register("address", { required: true })}
            placeholder='Your District'
            style={{ width: "50%", height: "25px", marginTop: "20px" }}
          />
          <br />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <Button type='submit' variant='contained' sx={{ mt: 3 }}>
            Submit
          </Button>
        </form>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Purchase;
