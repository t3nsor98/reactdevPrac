import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const id = useId();
  return (
    <div
      className={`bg-white p-4 rounded-lg text-black text-md flex ${className}`}
    >
      <div className="flex flex-col flex-1">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="number"
          className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          disabled={amountDisabled}
          placeholder={"0.00"}
        />
      </div>
      <div className="flex flex-col ml-4">
        <label htmlFor={id + "-currency"}>Currency</label>
        <select
          id={id + "-currency"}
          className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
