import React from "react";

export default function CheckBox({ title }) {
  return (
    <div className="flex items-center">
      <input
        id="subscribe"
        name="subscribe"
        type="checkbox"
        className="h-5 w-5 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
      />
      <label htmlFor="subscribe" className="ml-3 text-gray-100">
        {title}
      </label>
    </div>
  );
}
