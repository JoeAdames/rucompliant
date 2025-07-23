import React, { useState, useContext, createContext, useEffect } from "react";

const FormContext = useContext();

export const FormProvider = ({ children }) => {
  const [forms, setForms] = useState([
    {
      name: "",
      checked: false,
      details: "",
    },
    {
      name: "",
      checked: false,
      details: "",
    },
    {
      name: "",
      checked: false,
      details: "",
    },
    {
      name: "",
      checked: false,
      details: "",
    },
    {
      name: "",
      checked: false,
      details: "",
    },
  ]);

  return (
    <FormContext.Provider value={{ forms }}>{children}</FormContext.Provider>
  );
};

export const useForms = () => useForms(FormContext);
