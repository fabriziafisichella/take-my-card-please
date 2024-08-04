"use client";

import { createContext, useState, useRef } from "react";

export const globalContext = createContext();

const Context = ({ children }) => {
  const [name, setName] = useState("John Doe");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("");

  const cardRef = useRef(null);
  const inputRef = useRef(null);

  const value = {
    name,
    setName,
    number,
    setNumber,
    cvc,
    setCvc,
    month,
    setMonth,
    year,
    setYear,
    cardRef,
    inputRef,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default Context;
