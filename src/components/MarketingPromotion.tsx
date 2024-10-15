import React from 'react'
import { BarChart2, Mail, Globe, Share2 } from 'lucide-react'

const MarketingPromotion = () => {
  const marketingChannels = [
    { id: 1, name: 'Social Media', icon: <Share2 size={24} />, performance: '+15% engagement' },
    { id: 2, name: 'Email Campaigns', icon: <Mail size={24} />, performance: '22% open rate' },
    { id: 3, name: 'Website Traffic', icon: <Globe size={24} />, performance: '5,000 monthly visitors' },
    { id: 4, name: 'Analytics', icon: <BarChart2 size={24} />, performance: '10% conversion rate' },
  ]

  const upcomingCampaigns = [
    { id: 1, name: 'Summer Beat Sale', startDate: '2023-07-01', endDate: '2023-07-15', status: 'Scheduled' },
    { id: 2, name: 'New Artist Spotlight', startDate: '2023-07-20', endDate: '2023-08-03', status: 'Planning' },
    { id: 3, name: 'Producer Workshop Promo', startDate: '2023-08-10', endDate: '2023-08-24', status: 'Draft' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Marketing & Promotion</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {marketingChannels.map((channel) => (
          <div key={channel.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-indigo-600 mr-3">{channel.icon}</div>
              <h3 className="text-xl font-bold">{channel.name}</h3>
            </div>
            <p className="text-gray-600">{channel.performance}</p>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
              View Details
            </button>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Upcoming Campaigns</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {upcomingCampaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="px-6 py-4 whitespace-nowrap">{campaign.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{campaign.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{campaign.endDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    campaign.status === 'Scheduled' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                  <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
          Create New Campaign
        </button>
      </div>
    </div>
  )
}

export default MarketingPromotion