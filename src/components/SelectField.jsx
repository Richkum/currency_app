import React from "react";
import { Grid, Autocomplete, TextField } from "@mui/material";
import useAxios from "./hooks/useAxios";
import { Filter } from "@mui/icons-material";

const SelectField = (props) => {
  const { value, setValue } = props;
  const [data, error] = useAxios("https://restcountries.com/v3.1/all");
  if (error) {
    return "Something went wrong";
  }

  const filterr = data.filter((item) => "currencies" in item);

  const dataCountries = filterr.map((item) => {
    return `
    ${item.flag}
    ${Object.keys(item.currencies)[0]}
    - ${item.name.common}
    `;
  });

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        disableClearable
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        options={dataCountries}
        renderInput={(params) => <TextField {...params} />}
      />
    </Grid>
  );
};

export default SelectField;
