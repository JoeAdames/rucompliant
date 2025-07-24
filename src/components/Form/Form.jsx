import React, { useState } from "react";
import { useForms } from "../../context/FormContext";

export default function Form() {
  const { forms, setSubmittedForms } = useForms();
  const [formsData, setFormsData] = useState(forms);

  const handleChange = (e, categoryIndex, itemIndex, field) => {
    const value = field === "checked" ? e.target.checked : e.target.value;

    setFormsData((prev) => {
      const updated = [...prev];
      updated[categoryIndex] = {
        ...updated[categoryIndex],
        items: updated[categoryIndex].items.map((item, idx) =>
          idx === itemIndex ? { ...item, [field]: value } : item
        ),
      };
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedForms(formsData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg sm:max-w-3xl"
      aria-label="Compliance Form"
    >
      <header>
        <h1 className="text-3xl font-bold text-indigo-400 mb-2 text-center">
          Security Controls and Compliance Check list
        </h1>
        <p className="text-slate-400 text-center">
          Check the box if Item is in use.
        </p>
      </header>

      {forms.map((form, i) => (
        <div
          key={i}
          className="bg-zinc-800 rounded-2xl shadow-lg p-6 space-y-6 my-4"
        >
          <div className="text-xl font-bold mb-2 text-center text-indigo-400">
            {form.category}
          </div>
          {form.items.map((item, j) => (
            <div key={j} className="my-4 flex flex-col gap-y-3">
              <div className="flex items-center">
                <input
                  id={`checked-${i}`}
                  name={`checkbox-${i}`}
                  checked={formsData[i].items[j].checked}
                  onChange={(e) => handleChange(e, i, j, "checked")}
                  type="checkbox"
                  className="h-5 w-5 text-indigo-400 bg-zinc-700 border-zinc-600 rounded focus:ring-indigo-500 focus:ring-2"
                />
                <label className="ml-3 text-gray-100">{item.name}</label>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-slate-100 font-medium">
                  Additional Details
                </label>
                <textarea
                  id={`details-${i}`}
                  name={`textArea-${i}`}
                  rows="4"
                  value={formsData[i].items[j].details}
                  onChange={(e) => handleChange(e, i, j, "details")}
                  placeholder="Write your details here..."
                  className="w-full rounded-lg bg-zinc-700 border border-zinc-600 p-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>
              {/* <CheckBox title={item.name} />
              <TextArea /> */}
            </div>
          ))}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-indigo-400 hover:bg-indigo-500 text-zinc-900 py-3 rounded-lg font-semibold transition-colors"
      >
        Generate Report
      </button>
    </form>
  );
}
