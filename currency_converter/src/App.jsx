import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [result, setResult] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(0); // Reset result after swapping
  };

  const convert = () => {
    const rate = currencyInfo[toCurrency];
    if (rate) {
      setResult((amount * rate).toFixed(2)); // Calculate the result
    } else {
      alert("Conversion rate not available");
    }
  };

  return (
    <>
      <div className="relative h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#4f46e5_100%)]"></div>
        </div>

        {/* Content and the main form */}
        <section className="relative z-10 flex h-full items-center justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-lg w-full"
          >
            <h1 className="text-4xl font-bold text-center mb-6 text-black">
              Currency Converter
            </h1>
            <p className="text-center text-orange-700 mb-8 text-md ">
              Convert currencies in real-time using live exchange rates.
            </p>

            {/* Amount Input */}
            <div className="mb-6">
              <InputBox
                label="Amount"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOptions={options}
                selectedCurrency={fromCurrency}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                amountDisabled={false}
              />
            </div>

            {/* Swap Button */}
            <div className="flex justify-center mb-6">
              <button
                type="button"
                onClick={swap}
                className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Swap
              </button>
            </div>

            {/* Result Input */}
            <div className="mb-6">
              <InputBox
                label="Result"
                amount={result}
                currencyOptions={options}
                selectedCurrency={toCurrency}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                amountDisabled={true}
              />
            </div>

            {/* Convert Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default App;
