import { useEffect, useRef, useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    alert("Password copied to clipboard");
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-purple-900 text-purple-200">
      <div className="w-full max-w-lg mx-auto shadow-2xl rounded-lg px-8 py-10 bg-purple-950 text-purple-200">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6">
          Password Generator
        </h1>
        <h2 className="text-lg text-center text-purple-300 mb-8">
          Powered by useCallback, useRef & useEffect
        </h2>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none bg-purple-800 text-white w-full py-3 px-4"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 font-medium"
          >
            COPY
          </button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <label htmlFor="length" className="text-white font-medium">
            Length: {length}
          </label>
          <input
            type="range"
            min={4}
            max={32}
            value={length}
            className="cursor-pointer w-3/4 accent-purple-600"
            onChange={(event) => setLength(event.target.value)}
            id="length"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="numberBoolean" className="text-white font-medium">
            Numbers Allowed
          </label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            id="numberBoolean"
            className="w-5 h-5 text-purple-600 bg-purple-800 border-purple-600 rounded focus:ring-purple-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="specialChar" className="text-white font-medium">
            Special Characters Allowed
          </label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            id="specialChar"
            className="w-5 h-5 text-purple-600 bg-purple-800 border-purple-600 rounded focus:ring-purple-500"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
