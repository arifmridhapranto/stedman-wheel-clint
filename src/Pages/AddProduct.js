import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:9000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("your Product is Added On Database");
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
        Add A Products
      </Typography>
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "100%", marginTop: "15px", textAlign: "center" }}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            {...register("name", { required: true })}
            style={{ width: "100%", height: "40px", marginTop: "25px" }}
            placeholder='Name'
          />
          <br />
          <input
            {...register("img", { required: true })}
            style={{ width: "100%", height: "40px", marginTop: "25px" }}
            placeholder='Image Link'
          />
          <br />
          <input
            {...register("price", { required: true })}
            style={{ width: "100%", height: "40px", marginTop: "25px" }}
            placeholder='price'
            type='number'
          />
          <br />

          {/* include validation with required or other standard HTML validation rules */}
          <input
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
      </Container>
    </div>
  );
};

export default AddProduct;
