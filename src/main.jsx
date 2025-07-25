import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FormProvider } from "./context/FormContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </StrictMode>
);
