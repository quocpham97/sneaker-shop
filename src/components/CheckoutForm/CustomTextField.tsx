import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

function FormInput({ name, label }) {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        defaultValue=""
        control={control}
        fullWidth
        name={name}
        label={label}
        required
      />
    </Grid>
  );
}

export default FormInput;
