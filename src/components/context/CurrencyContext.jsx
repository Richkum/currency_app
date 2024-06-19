import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvide = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState(" 🇺🇸 USD - United States");
  const [toCurrency, setToCurrency] = useState(" 🇺🇸 USD - United States");
  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvide;
