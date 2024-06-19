import React, { useContext } from "react";
import { Grid, Button } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { CurrencyContext } from "./context/CurrencyContext";

const SwitchChange = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);

  const SwicthSides = () => {
    setFromCurrency(setToCurrency);
    setToCurrency(setFromCurrency);
  };

  return (
    <Grid item xs={12} md="auto">
      <Button onClick={SwicthSides}>
        <CompareArrowsIcon />
      </Button>
    </Grid>
  );
};

export default SwitchChange;
