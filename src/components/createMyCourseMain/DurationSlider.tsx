import { useState } from "react";

export default function RangeSlider() {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center slidecontainer">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-full appearance-none bg-gray-300 h-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 slider"
        id="myRange"
      />
      <p className="mt-2 text-sm text-gray-600">
        Value: <span className="font-medium text-gray-800">{value / 5}</span>
      </p>
    </div>
  );
}
