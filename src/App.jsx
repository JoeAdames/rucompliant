import { useState } from "react";
import Report from "./components/Form/Report";
import { useForms } from "./context/FormContext";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const { submittedForms } = useForms();
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-slate-100 p-4">
        {submittedForms ? <Report /> : <Form />}
      </section>
    </>
  );
}

export default App;
