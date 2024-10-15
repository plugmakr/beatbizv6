import React from 'react'
import { DollarSign, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'

const FinancialManagement = () => {
  const financialSummary = [
    { id: 1, title: 'Total Revenue', amount: '$15,230', icon: <DollarSign size={24} />, trend: 'up' },
    { id: 2, title: 'Expenses', amount: '$4,560', icon: <TrendingDown size={24} />, trend: 'down' },
    { id: 3, title: 'Net Profit', amount: '$10,670', icon: <TrendingUp size={24} />, trend: 'up' },
    { id: 4, title: 'Pending Invoices', amount: '$2,800', icon: <AlertCircle size={24} />, trend: 'neutral' },
  ]

  const recentTransactions = [
    { id: 1, description: 'Beat sale - Summer Vibes', amount: '+$350', date: '2023-06-15' },
    { id: 2, description: 'Studio equipment purchase', amount: '-$1,200', date: '2023-06-12' },
    { id: 3, description: 'Royalty payment', amount: '+$780', date: '2023-06-10' },
    { id: 4, description: 'Software subscription', amount: '-$49', date: '2023-06-05' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Financial Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {financialSummary.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className={`text-${item.trend === 'up' ? 'green' : item.trend === 'down' ? 'red' : 'yellow'}-600`}>
                {item.icon}
              </div>
              <span className="text-2xl font-bold">{item.amount}</span>
            </div>
            <h3 className="text-gray-600">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300 mr-4">
          Create Invoice
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
          Record Expense
        </button>
      </div>
    </div>
  )
}

export default FinancialManagement