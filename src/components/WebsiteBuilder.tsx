import React from 'react'
import { Layout, Edit, ShoppingCart, Smartphone } from 'lucide-react'

const WebsiteBuilder = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Website Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <FeatureCard icon={<Layout size={24} />} title="Choose Template" description="Select from professional designs" />
        <FeatureCard icon={<Edit size={24} />} title="Customize" description="Easy drag-and-drop editing" />
        <FeatureCard icon={<ShoppingCart size={24} />} title="E-commerce" description="Sell beats directly on your site" />
        <FeatureCard icon={<Smartphone size={24} />} title="Mobile Optimized" description="Look great on all devices" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Your Websites</h2>
        {/* Add website management interface here */}
      </div>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default WebsiteBuilder