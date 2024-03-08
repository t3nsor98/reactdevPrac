import { useState } from "react";
import "./App.css";

function MyButton() {
  const [number, setNumber] = useState(0);
  function increment() {
    setNumber(number + 1);
  }
  return (
    <>
      <button onClick={increment}>Clicked {number} times</button>;
    </>
  ); 
  
}

export default function App() {
  return (
    <div>
      <h1>Hello World!!!</h1>
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}


