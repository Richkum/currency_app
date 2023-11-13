import { useContext, useState } from "react";
// import {
//   QueryClient,
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";
import CurrencyInput from "./components/currencyinput";
import { Container, Typography } from "@mui/material";
import InputAmount from "./components/currencyinput";
import SelectField from "./components/SelectField";
import SwitchChange from "./components/SwitchChange";
import "./App.css";
import { CurrencyContext } from "./components/context/CurrencyContext";

// const queryClient = new QueryClient();

function App() {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);

  const contStyle = {
    background: "#fdfd",
    display: "flex",
    gap: "1rem",
  };
  return (
    <>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", background: "#fdfd" }}
      >
        Currency
      </Typography>
      <Container maxWidth="md" sx={contStyle}>
        <InputAmount />
        <SelectField value={fromCurrency} etValue={setFromCurrency} />
      </Container>
      <SwitchChange />
      <Container maxWidth="md" sx={contStyle}>
        <InputAmount />
        <SelectField value={toCurrency} setValue={setToCurrency} />
      </Container>
    </>
  );
}

export default App;
