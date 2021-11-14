import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container, Button, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
  const [updatedProduct, setUpdatedProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:9000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUpdatedProduct(data);
      });
  }, [id]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:9000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("your Product is Updated");
          reset();
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
        Update Products
      </Typography>
      <Container>
        {updatedProduct.name && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "100%", marginTop: "15px", textAlign: "center" }}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              defaultValue={updatedProduct.name}
              {...register("name", { required: true })}
              style={{ width: "100%", height: "40px", marginTop: "25px" }}
              placeholder='Name'
            />
            <br />
            <input
              defaultValue={updatedProduct.img}
              {...register("img", { required: true })}
              style={{ width: "100%", height: "40px", marginTop: "25px" }}
              placeholder='Image Link'
            />
            <br />
            <input
              defaultValue={updatedProduct.price}
              {...register("price", { required: true })}
              style={{ width: "100%", height: "40px", marginTop: "25px" }}
              placeholder='price'
              type='number'
            />
            <br />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              defaultValue={updatedProduct.description}
              {...register("description", { required: true })}
              placeholder='Description'
              style={{ width: "100%", height: "80px", marginTop: "25px" }}
            />
            <br />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <Button type='submit' variant='contained' sx={{ mt: 3 }}>
              Submit
            </Button>
          </form>
        )}
        {!updatedProduct.name && <CircularProgress />}
      </Container>
    </div>
  );
};

export default UpdateProduct;
