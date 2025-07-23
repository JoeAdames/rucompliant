import { useState } from "react";

import Form from "./components/Form/Form";
import "./App.css";

function App() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-slate-100 p-4">
        <Form />
      </section>
    </>
  );
}

export default App;
