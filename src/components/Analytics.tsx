import React, { lazy, Suspense } from 'react'
import { BarChart2, PieChart, TrendingUp, DollarSign } from 'lucide-react'

const ChartComponent = lazy(() => import('./ChartComponent'))

const Analytics = () => {
  const summaryData = [
    { title: 'Total Revenue', value: '$15,230', icon: <DollarSign size={24} />, trend: 'up' },
    { title: 'Active Projects', value: '12', icon: <BarChart2 size={24} />, trend: 'neutral' },
    { title: 'New Clients', value: '5', icon: <TrendingUp size={24} />, trend: 'up' },
    { title: 'Completed Projects', value: '8', icon: <PieChart size={24} />, trend: 'down' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className={`text-${item.trend === 'up' ? 'green' : item.trend === 'down' ? 'red' : 'yellow'}-600`}>
                {item.icon}
              </div>
              <span className="text-2xl font-bold">{item.value}</span>
            </div>
            <h3 className="text-gray-600">{item.title}</h3>
          </div>
        ))}
      </div>
      
      <Suspense fallback={<div>Loading charts...</div>}>
        <ChartComponent />
      </Suspense>
    </div>
  )
}

export default Analytics