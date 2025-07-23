import { useState } from "react";
import { FormProvider } from "./context/FormContext";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  return (
    <FormProvider>
      <section className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4">
        <Form />
      </section>
    </FormProvider>
  );
}

export default App;
