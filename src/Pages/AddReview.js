import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://gentle-dusk-82174.herokuapp.com/addreview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Your Review is Added");
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
        Add A Review
      </Typography>
      <Container style={{ textAlign: "center" }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "60%", marginTop: "15px", textAlign: "center" }}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            defaultValue={user.displayName}
            {...register("userName")}
            readOnly
            style={{ width: "100%", height: "80px", marginTop: "25px" }}
            placeholder='Name'
          />
          <br />
          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("rating", { required: true })}
            style={{ width: "100%", height: "80px", marginTop: "25px" }}
            placeholder='Give a review (1-5)'
            type='number'
          />
          <br />
          <input
            {...register("Comments", { required: true })}
            style={{ width: "100%", height: "80px", marginTop: "25px" }}
            placeholder='Your Comment'
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

export default AddReview;
