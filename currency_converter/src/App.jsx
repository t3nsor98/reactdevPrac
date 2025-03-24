import { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(0);



  return (
    <>
      <div className="relative h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        {/* Content and the main form */}
        
        
      </div>
    </>
  );
}

export default App;
