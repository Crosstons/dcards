import React, { useState } from 'react';

function CreateForm() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Remove the default dollar sign before checking the numeric validation
    const numericValue = value.slice(1);
    if (/^\d*\.?\d*$/.test(numericValue)) {  // Allow only numerical values, including decimals
      setAmount(value);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {  // Allow only alphabets and spaces
      setName(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mb-8 text-emerald-700 font-semibold">Create Pools</h1>
      <div className="flex flex-wrap items-center justify-center -m-4">
        <div className="p-4 lg:w-1/3">
          <div className="h-full bg-gradient-to-b from-emerald-600 to-emerald-800 bg-opacity-75 cursor-pointer hover:scale-105 transition-all duration-300 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              
              <div className="mb-6 relative">
                  <input 
                      className={`appearance-none w-full bg-transparent text-8xl font-medium font-sor focus:outline-none ${amount ? 'text-white' : 'text-gray-400'}`}
                      id="amount" 
                      type="text" 
                      placeholder="$00.00" 
                      required 
                      value={amount || '$'}
                      onChange={handleAmountChange}
                  />
              </div>

              <div className="mb-6 relative">
                  <input 
                      className={`appearance-none w-full bg-transparent tracking-widest leading-10 focus:outline-none ${name ? 'text-white' : 'text-gray-400'}`}
                      id="name" 
                      type="text" 
                      placeholder="Pool Name" 
                      required 
                      value={name}
                      onChange={handleNameChange}
                  />
              </div>
              
              <div className="flex justify-center mt-4">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-emerald" type="submit">
                      Create Pool
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateForm;
