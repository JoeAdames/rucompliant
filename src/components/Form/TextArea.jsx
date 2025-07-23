import React from "react";

export default function TextArea() {
  return (
    <div className="flex flex-col">
      <label htmlFor="feedback" className="mb-2 text-slate-100 font-medium">
        Additional Details
      </label>
      <textarea
        id="feedback"
        name="feedback"
        rows="4"
        placeholder="Write your details here..."
        className="w-full rounded-lg bg-zinc-700 border border-zinc-600 p-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      ></textarea>
    </div>
  );
}
