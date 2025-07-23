import React from "react";
import { useForms } from "../../context/FormContext";
import CheckBox from "./CheckBox";
import TextArea from "./TextArea";

export default function Form({ title }) {
  const { forms } = useForms();
  return (
    <form
      className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-lg p-6 space-y-6"
      aria-label="Feedback form"
    >
      <header>
        <h1 className="text-3xl font-bold text-purple-500 mb-2"></h1>
      </header>

      {forms.map((form) => (
        <>
          <CheckBox title={form.name} />
          <TextArea />
        </>
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-purple-500 hover:bg-purple-600 text-gray-100 py-3 rounded-lg font-semibold transition-colors"
      >
        Submit Feedback
      </button>
    </form>
  );
}
