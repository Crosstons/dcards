import React, { useState } from 'react';

const SpenderScreen = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardForTransfer, setCardForTransfer] = useState(null);

  const handleTransferClick = (index) => {
    setCardForTransfer(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCardForTransfer(null);
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const cardTitles = [
    "Raclette Blueberry Nextious Level",
    "Ennui Snackwave Thundercats",
    "Selvage Poke Waistcoat Godard"
  ];

  return (
    <section className="text-gray-600 body-font min-h-screen bg-gray-200 p-5 flex flex-col items-center justify-center">
      <div className="container mx-auto mb-4">
        
      <h1 className='text-center text-4xl font-bold mb-6 text-black'>Select your card</h1>
        <div className="flex flex-wrap -m-4">
        {cardTitles.map((title, index) => (
    <div key={index} className="p-4 lg:w-1/3 ">
        <div 
            onClick={() => handleCardClick(index)}
            className={`h-full relative overflow-hidden rounded-lg text-white ${selectedCard === index ? 'border-4 border-green-500' : ''}`}
            style={{
                background: 'linear-gradient(135deg, #3B4A6D, #1E2A47, #152238)',
                height: '250px'
            }}
        >
            <div className="absolute top-4 left-4">
                <h1 className="text-4xl font-bold">${Math.floor(Math.random() * 10000) + 1000}.00</h1>
                <p className="text-md mt-2">Balance</p>
            </div>

            <div className="absolute bottom-4 left-4">
                <h2 className="text-lg tracking-widest font-thin">{title}</h2>
            </div>

            <div className="absolute top-4 right-4">
                <div className="bg-white rounded-full p-1">
                    <div className="bg-red-500 w-6 h-6 rounded-full"></div>
                </div>
            </div>
        </div>
        <button
            onClick={() => handleTransferClick(index)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Transfer Card
          </button>
    </div>
))}
{isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl mb-4">Transfer Card</h2>
            <p>Transfer for: {cardTitles[cardForTransfer]}</p>
            <input 
              type="text"
              placeholder="Enter wallet address"
              className="border px-2 py-1 rounded mt-2 w-full"
            />
            <div className="mt-4 flex justify-end">
              <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={closeModal}>Transfer</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

        </div>
      </div>

      <div className="container mx-auto bg-white p-10 rounded-lg shadow-xl">
        <h1 className="title-font text-4xl font-bold text-gray-900 mb-6 text-center">Enter Wallet Address</h1>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Wallet Address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="text-gray-700 focus:outline-none focus:border-indigo-500 border rounded w-full py-2 px-3 leading-tight"
          />
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4">
            Spend
          </button>
        </div>
      </div>
    </section>
  );
}

export default SpenderScreen;
