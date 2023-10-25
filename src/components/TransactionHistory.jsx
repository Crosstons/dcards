import React from 'react';

function TransactionHistory() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mb-6 text-blue-700 font-semibold">Transaction History</h1>

      {/* Sample transaction data grouped by date */}
      {[
        { 
          date: '2023-04-23', 
          day: 'Sunday', 
          transactions: [
            { type: 'debit', name: 'Visa Debit Card', amount: '-$200', address: '-' },
          ]
        },
        { 
          date: '2023-04-24', 
          day: 'Monday', 
          transactions: [
            { type: 'transfer', name: 'Visa Debit Card Transfer', amount: '-', address: '0xAbC1234567890dEfGhIjK...' },
          ]
        },
        { 
          date: '2023-04-25', 
          day: 'Tuesday', 
          transactions: [
            { type: 'received', name: 'Visa Debit Card Received', amount: '+$300', address: '0xZyX9876543210wVuT...' },
          ]
        },
      ].map(dateGroup => (
        <div className="w-2/3 mb-6" key={dateGroup.date}>
          <h2 className="mb-3 text-xl font-medium">{dateGroup.date} ({dateGroup.day})</h2>
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="text-gray-700">
              <tr>
                <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm uppercase font-medium">Debit Card Name</th>
                <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm uppercase font-medium">Amount</th>
                <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm uppercase font-medium">Wallet Address</th>
              </tr>
            </thead>
            <tbody>
              {dateGroup.transactions.map(transaction => (
                <tr key={transaction.name} className={transaction.type === 'received' ? 'text-green-500' : 'text-red-500'}>
                  <td className="px-4 py-3 border-b flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                    <span>{transaction.name}</span>
                  </td>
                  <td className="px-4 py-3 border-b">{transaction.amount}</td>
                  <td className="px-4 py-3 border-b">{transaction.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default TransactionHistory;
