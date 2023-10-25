import React, { useState } from 'react';

function Interaction() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ placeholder: "", title: "" });

  const handleButtonClick = (placeholder, title) => {
    setShowModal(true);
    setModalContent({ placeholder, title });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mb-6 text-emerald-700 font-semibold">Pool Interaction</h1>

      <div className="p-4 lg:w-1/3 mb-6">
        <div className="h-full bg-gradient-to-b from-emerald-600 to-emerald-800 bg-opacity-75 cursor-pointer hover:scale-105 transition-all duration-300 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="text-8xl font-medium font-sor text-white mb-3">$1000</h1>
          <p className="mb-3 text-white tracking-widest leading-10">Pool Name</p>
        </div>
      </div>

      <div className="w-1/3 mb-6">
        <table className="min-w-full bg-white rounded-xl overflow-hidden">
          <tbody className="text-gray-700">
            <tr>
              <td className="px-4 py-3 border">Detail 1</td>
              <td className="px-4 py-3 border">Value 1</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border">Detail 2</td>
              <td className="px-4 py-3 border">Value 2</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border">Detail 3</td>
              <td className="px-4 py-3 border">Value 3</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border">Detail 4</td>
              <td className="px-4 py-3 border">Value 4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-1/3 flex justify-between mb-6">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-emerald" onClick={() => handleButtonClick("Input for Button 1", "Button 1")}>Button 1</button>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-emerald" onClick={() => handleButtonClick("Input for Button 2", "Button 2")}>Button 2</button>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-emerald" onClick={() => handleButtonClick("Input for Button 3", "Button 3")}>Button 3</button>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="mb-4 text-emerald-700">{modalContent.title}</h2>
            <input type="text" placeholder={modalContent.placeholder} className="border rounded px-4 py-2 mb-4 w-full"/>
            <div className="flex justify-between">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-emerald" type="submit">Submit</button>
              <button className="text-emerald-700 font-bold py-2 px-4 focus:outline-none" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Interaction;
