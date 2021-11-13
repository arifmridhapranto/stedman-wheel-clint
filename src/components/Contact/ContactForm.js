import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
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

      {/* include validation with required or other standard HTML validation rules */}
      <input
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
