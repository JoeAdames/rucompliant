import React from "react";
import { useForms } from "../../context/FormContext";

export default function Report() {
  const { submittedForms, resetStorage } = useForms();

  const checkedItems = submittedForms
    .map((section) => {
      const checkedItems = section.items.filter((item) => item.checked);

      return {
        category: section.category,
        items: checkedItems,
      };
    })
    .filter(Boolean);

  const calculatePercentage = (score, possibleScore) => {
    if (possibleScore === 0) return 0;
    console.log(score);

    const percentScore = (score / possibleScore) * 100;
    return Math.trunc(percentScore);
  };

  return (
    <section className="w-full max-w-lg sm:max-w-4xl mt-5">
      <button
        onClick={resetStorage}
        className="px-4 py-1 my-2 rounded-lg text-slate-100 bg-indigo-400 text-"
      >
        Reset
      </button>
      <div className="bg-zinc-800 border border-slate-100 rounded-lg p-5">
        <div className="flex justify-between my-2 text-indigo-400 text-xl">
          <div>Category</div>
          <div>Score</div>
        </div>
        <ul className="flex flex-col gap-y-5">
          {submittedForms.map((category, i) => (
            <li key={i} className="flex justify-between">
              <div>{submittedForms[i].category}</div>
              <div className="flex justify-between items-center">
                <div className="px-2">
                  {checkedItems[i].items.length}/
                  {submittedForms[i].items.length}
                </div>
                <div
                  className={
                    calculatePercentage(
                      checkedItems[i].items.length,
                      submittedForms[i].items.length
                    ) == 100
                      ? "text-green-500 font-bold"
                      : "text-red-500 font-bold text-xl"
                  }
                >
                  {calculatePercentage(
                    checkedItems[i].items.length,
                    submittedForms[i].items.length
                  )}
                  %
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {submittedForms.map((category, i) => (
        <div className="bg-zinc-800 border border-slate-100 rounded-lg p-5 my-5">
          <div className="text-center mt-5 text-indigo-400 text-2xl">
            {submittedForms[i].category}
          </div>
          <ul className="">
            {submittedForms[i].items.map((item, j) => (
              <li key={i} className="p-5">
                <div className="flex justify-between my-3">
                  <div className="w-150 font-bold0 text-xl">
                    {submittedForms[i].items[j].name}
                  </div>
                  <div
                    className={
                      submittedForms[i].items[j].checked == true
                        ? "text-green-500"
                        : "text-red-600"
                    }
                  >
                    {submittedForms[i].items[j].checked == true
                      ? "Secure"
                      : "Not Secure"}
                  </div>
                </div>
                <div className="my-1 text-zinc-500">
                  {submittedForms[i].items[j].details == ""
                    ? "No Notes"
                    : submittedForms[i].items[j].details}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
