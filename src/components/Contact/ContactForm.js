import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const ContactForm = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://gentle-dusk-82174.herokuapp.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("your Form is Submited");
          reset();
        }
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "100%", marginTop: "15px", textAlign: "center" }}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        defaultValue={user.displayName}
        {...register("name", { required: true })}
        style={{ width: "100%", height: "40px", marginTop: "25px" }}
        placeholder='Name'
      />
      <br />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        defaultValue={user.email}
        {...register("email", { required: true })}
        style={{ width: "100%", height: "40px", marginTop: "25px" }}
        placeholder='Email'
      />
      <br />

      <input
        {...register("message", { required: true })}
        placeholder='Your Message'
        style={{ width: "100%", height: "80px", marginTop: "25px" }}
      />
      <br />

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input
        type='submit'
        style={{
          color: "white",
          width: "50%",
          height: "40px",
          backgroundColor: "#1ba370",
          marginTop: "15px",
        }}
      />
    </form>
  );
};

export default ContactForm;
