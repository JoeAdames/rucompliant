import React from "react";
import { useForms } from "../../context/FormContext";
import CheckBox from "./CheckBox";
import TextArea from "./TextArea";

export default function Form() {
  const { forms } = useForms();
  return (
    <form className="w-full max-w-lg sm:max-w-3xl" aria-label="Compliance Form">
      <header>
        <h1 className="text-3xl font-bold text-indigo-400 mb-2 text-center">
          Security Controls and Compliance Check list
        </h1>
        <p className="text-slate-400 text-center">
          Check the box if Item is in use.
        </p>
      </header>

      {forms.map((form) => (
        <div
          key={form.category}
          className="bg-zinc-800 rounded-2xl shadow-lg p-6 space-y-6 my-4"
        >
          <div className="text-xl font-bold text-gray-100 mb-2 text-center text-indigo-400">
            {form.category}
          </div>
          {form.items.map((item) => (
            <div key={item.name} className="my-4 flex flex-col gap-y-3">
              <CheckBox title={item.name} />
              <TextArea />
            </div>
          ))}
        </div>
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-400 hover:bg-indigo-500 text-zinc-900 py-3 rounded-lg font-semibold transition-colors"
      >
        Generate Report
      </button>
    </form>
  );
}
