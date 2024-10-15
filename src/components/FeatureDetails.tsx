import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const featureDetails = {
  'project-management': {
    title: 'Project Management',
    description: 'Streamline your music production workflow with our powerful project management tools.',
    benefits: [
      'Organize beats, collaborations, and projects in one place',
      'Set deadlines and track progress effortlessly',
      'Collaborate with team members and clients in real-time',
      'Integrate with popular DAWs for seamless workflow'
    ]
  },
  'financial-tools': {
    title: 'Financial Tools',
    description: 'Take control of your finances and maximize your earnings as a music producer.',
    benefits: [
      'Generate professional invoices and track payments',
      'Monitor expenses and calculate profit margins',
      'Automate royalty calculations and distributions',
      'Generate financial reports for tax purposes'
    ]
  },
  'client-management': {
    title: 'Client Management',
    description: 'Build and maintain strong relationships with your clients and collaborators.',
    benefits: [
      'Centralize client information and communication history',
      'Manage contracts and agreements efficiently',
      'Schedule meetings and track client interactions',
      'Provide a client portal for seamless collaboration'
    ]
  },
  'analytics': {
    title: 'Analytics',
    description: 'Gain valuable insights to grow your music production business.',
    benefits: [
      'Track beat sales and revenue trends',
      'Analyze listener demographics and preferences',
      'Monitor social media engagement and growth',
      'Identify your most successful marketing channels'
    ]
  },
  'social-media': {
    title: 'Social Media Management',
    description: 'Grow your online presence and engage with your audience effectively.',
    benefits: [
      'Manage multiple social media accounts from one dashboard',
      'Schedule and automate posts across platforms',
      'Monitor comments and engage with your audience',
      'Analyze social media performance and growth'
    ]
  },
  'funnel-builder': {
    title: 'Funnel Builder',
    description: 'Create effective marketing funnels to sell your beats and services.',
    benefits: [
      'Design custom landing pages for beat promotions',
      'Create email opt-in campaigns for lead generation',
      'Build upsell and cross-sell funnels to maximize revenue',
      'A/B test your funnels to optimize conversion rates'
    ]
  },
  'sound-library': {
    title: 'Sound Library Management',
    description: 'Organize and access your sound collections with ease.',
    benefits: [
      'Categorize and tag your samples, presets, and loops',
      'Quick search and preview functionality',
      'Integration with popular DAWs for seamless workflow',
      'Collaborate and share sounds with team members'
    ]
  },
  'website-builder': {
    title: 'Website Builder',
    description: 'Create a stunning portfolio website to showcase your work and sell beats.',
    benefits: [
      'Choose from professionally designed templates',
      'Customize your site with a drag-and-drop interface',
      'Integrate e-commerce features to sell beats directly',
      'Optimize your site for search engines and mobile devices'
    ]
  }
}

const FeatureDetails = () => {
  const { featureId } = useParams<{ featureId: string }>()
  const feature = featureId ? featureDetails[featureId as keyof typeof featureDetails] : null

  if (!feature) {
    return <div>Feature not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-white hover:text-indigo-200 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-6">{feature.title}</h1>
        <p className="text-xl mb-8">{feature.description}</p>
        <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          {feature.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <div className="mt-12">
          <Link to="/admin" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold hover:bg-indigo-100 transition duration-300">
            Try {feature.title} Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeatureDetails