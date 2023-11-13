import React from "react";
import { Grid, TextField } from "@mui/material";

function InputAmount() {
  return (
    <Grid item>
      <TextField
        sx={{
          border: "none",
          width: "md",
        }}
        inputProps={{ type: "number" }}
      ></TextField>
    </Grid>
  );
}

export default InputAmount;
