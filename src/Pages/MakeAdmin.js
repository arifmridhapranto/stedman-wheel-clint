import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const handleOnSubmit = (e) => {
    const user = { email: adminEmail };
    fetch("https://gentle-dusk-82174.herokuapp.com/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          alert("Admin is Added");
          setAdminEmail("");
        }
      });
    e.preventDefault();
  };
  const handleOnBlur = (e) => {
    setAdminEmail(e.target.value);
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
        Make Admin
      </Typography>
      <Container sx={{ textAlign: "center" }}>
        <form onSubmit={handleOnSubmit}>
          <TextField
            id='outlined-basic'
            label='Email'
            type='email'
            variant='outlined'
            onBlur={handleOnBlur}
            sx={{ width: "75%" }}
          />
          <br />
          <Button type='submit' variant='contained' sx={{ mt: 3 }}>
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default MakeAdmin;
