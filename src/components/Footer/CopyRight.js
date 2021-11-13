import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <div>
      <Typography
        variant='h5'
        sx={{
          textAlign: "center",
          mt: 5,
          color: "white",
          textDecoration: "none",
        }}>
        All Copyright's reserved by{" "}
        <Link
          to={{ pathname: "http://www.facebook.com/pranto.mridha.7" }}
          target='_blank'>
          {" "}
          Pranto Mridha
        </Link>
      </Typography>
    </div>
  );
};

export default CopyRight;
