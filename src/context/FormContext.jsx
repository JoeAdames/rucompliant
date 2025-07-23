import React, { useState, useContext, createContext, useEffect } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [forms, setForms] = useState([
    {
      category: "Security Controls",
      items: [
        { name: "Least Privelage", checked: false, details: "" },
        { name: "Disaster Recovery Plans", checked: false, details: "" },
        { name: "Password Policies", checked: false, details: "" },
        { name: "Separation of Duties", checked: false, details: "" },
        {
          name: "Intrusion Detection System (IDS)",
          checked: false,
          details: "",
        },
        { name: "Backups", checked: false, details: "" },
        { name: "Antivirus Software", checked: false, details: "" },
        {
          name: "Manual Monitoring, Maintenance, and Intervention for Legacy Systems",
          checked: false,
          details: "",
        },
        { name: "Encryption", checked: false, details: "" },
        { name: "Password Management System", checked: false, details: "" },
        {
          name: "Locks (offices, storefront, warehouse)",
          checked: false,
          details: "",
        },
        {
          name: "Closed-Circuit Television (CCTV) Surveillance",
          checked: false,
          details: "",
        },
        {
          name: "Fire Detection/Prevention (fire alarms, sprinkler system, etc.)",
          checked: false,
          details: "",
        },
      ],
    },
    {
      category: "Payment Card Industry Data Security Standard (PCI DSS)",
      items: [
        {
          name: "Only authorized users have access to customers’ credit card information.",
          checked: false,
          details: "",
        },
        {
          name: "Credit card information is stored, accepted, processed, and transmitted internally, in a secure environment.",
          checked: false,
          details: "",
        },
        {
          name: "Implement data encryption procedures to better secure credit card transaction touchpoints and data.",
          checked: false,
          details: "",
        },
        {
          name: "Adopt secure password management policies.",
          checked: false,
          details: "",
        },
      ],
    },
    {
      category: "General Data Protection Regulation (GDPR)",
      items: [
        {
          name: "E.U. customers’ data is kept private/secured.",
          checked: false,
          details: "",
        },
        {
          name: "There is a plan in place to notify E.U. customers within 72 hours if their data is compromised/there is a breach.",
          checked: false,
          details: "",
        },
        {
          name: "Ensure data is properly classified and inventoried.",
          checked: false,
          details: "",
        },
        {
          name: "Enforce privacy policies, procedures, and processes to properly document and maintain data.",
          checked: false,
          details: "",
        },
      ],
    },
    {
      category: "System and Organizations Controls (SOC type 1, SOC type 2)",
      items: [
        {
          name: "User access policies are established.",
          checked: false,
          details: "",
        },
        {
          name: "Sensitive data (PII/SPII) is confidential/private.",
          checked: false,
          details: "",
        },
        {
          name: "Data integrity ensures the data is consistent, complete, accurate, and has been validated.",
          checked: false,
          details: "",
        },
        {
          name: "Data is available to individuals authorized to access it.",
          checked: false,
          details: "",
        },
      ],
    },
  ]);

  return (
    <FormContext.Provider value={{ forms }}>{children}</FormContext.Provider>
  );
};

export const useForms = () => useContext(FormContext);
