import React from "react";

export default function TextArea() {
  return (
    <div className="flex flex-col">
      <label htmlFor="feedback" className="mb-2 text-gray-100 font-medium">
        Additional Details
      </label>
      <textarea
        id="feedback"
        name="feedback"
        rows="4"
        placeholder="Write your details here..."
        className="w-full rounded-lg bg-gray-700 border border-gray-600 p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      ></textarea>
    </div>
  );
}
