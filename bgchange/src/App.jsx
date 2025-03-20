import { useState } from "react";

import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#36F1CD");

  const changeColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(`#${randomColor}`);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(bgColor).then(() => {
      alert(`Copied ${bgColor} to clipboard!`);
    });
  };

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center`}
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-6xl font-bold">Random Background Color Generator</h1>
      <button
        onClick={changeColor}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded cursor-pointer text-2xl"
      >
        Change Color
      </button>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded cursor-pointer text-2xl" onClick={copyToClipboard}>{bgColor}</button>
    </div>
  );
}

export default App;

