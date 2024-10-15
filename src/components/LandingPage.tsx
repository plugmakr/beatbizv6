import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Music, DollarSign, Users, BarChart2, Youtube, TrendingUp, Globe, Zap, Shield, Award, Star, Briefcase, Rocket, Target, Check } from 'lucide-react'

const LandingPage = () => {
  const pricingRef = useRef<HTMLDivElement>(null)

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    { icon: <Music size={24} />, title: 'Project Management', description: 'Organize and track your music projects efficiently.' },
    { icon: <DollarSign size={24} />, title: 'Financial Tools', description: 'Manage your finances and royalties with ease.' },
    { icon: <Users size={24} />, title: 'Client Management', description: 'Keep track of clients and collaborations.' },
    { icon: <BarChart2 size={24} />, title: 'Analytics', description: 'Gain insights into your music performance and audience.' },
    { icon: <Youtube size={24} />, title: 'Social Media Integration', description: 'Manage your social media presence from one place.' },
    { icon: <TrendingUp size={24} />, title: 'Marketing Tools', description: 'Promote your music and grow your audience.' }
  ]

  const additionalFeatures = [
    { icon: <Globe size={24} />, title: 'Website Builder', description: 'Create a professional website for your music brand.' },
    { icon: <Zap size={24} />, title: 'Collaboration Tools', description: 'Work seamlessly with other producers and artists.' },
    { icon: <Shield size={24} />, title: 'Rights Management', description: 'Protect your intellectual property and manage licenses.' },
    { icon: <Award size={24} />, title: 'Customizable Workflows', description: 'Tailor the platform to fit your unique production process.' },
    { icon: <Star size={24} />, title: 'Beat Marketplace', description: 'Sell your beats directly to clients through our platform.' },
    { icon: <Briefcase size={24} />, title: 'Professional Resources', description: 'Access industry insights and educational content.' }
  ]

  const whyUseBeatBiz = [
    { icon: <Rocket size={24} />, title: 'Streamlined Workflow', description: 'Manage all aspects of your music production business in one place.' },
    { icon: <Target size={24} />, title: 'Increased Productivity', description: 'Focus more on creating music and less on administrative tasks.' },
    { icon: <Zap size={24} />, title: 'Faster Growth', description: 'Leverage powerful tools to expand your client base and increase revenue.' },
    { icon: <Shield size={24} />, title: 'Enhanced Professionalism', description: 'Present a polished image to clients with our integrated tools.' }
  ]

  const pricingPlans = [
    { 
      name: 'CRM Only', 
      price: '$15', 
      features: [
        'Project management for up to 20 active projects',
        'Basic financial tracking',
        'Client management (up to 20 clients)',
        'Email support',
        'Website builder (1 website)',
        'Social media integration (Instagram, YouTube, TikTok)',
        '5GB cloud storage',
        'Funnel Builder (1 funnel)',
        'Basic Marketing and Promotion tools'
      ]
    },
    { 
      name: 'Pro', 
      price: '$30', 
      features: [
        'Unlimited active projects',
        'Advanced financial tools and reporting',
        'Unlimited client management',
        'Priority email and chat support',
        'Website builder (3 websites)',
        'Social media integration (all major platforms)',
        'Marketing and promotion tools',
        'Funnel builder (3 funnels)',
        '50GB cloud storage',
        'Collaboration tools',
        'Beat Store'
      ]
    },
    { 
      name: 'Enterprise', 
      price: '$100', 
      features: [
        'All Pro features',
        '24/7 priority support',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced analytics and insights',
        'Unlimited websites',
        'Unlimited funnels',
        'White-label options',
        '500GB cloud storage',
        'Team collaboration features',
        'Beat Store'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 text-white">
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Elevate Your Music Production Business</h1>
          <p className="text-xl mb-8">All-in-one platform for music producers to manage projects, finances, and grow their brand.</p>
          <Link to="/register" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-indigo-100 transition duration-300">
            Start Free Trial
          </Link>
        </div>
        
        {/* Features section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Features That Empower Your Music Career</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-blue-100 bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20 hover:border hover:border-white">
                <div className="text-indigo-300 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-indigo-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Why use BeatBiz Pro section */}
        <section className="mb-20 bg-indigo-600 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Why use BeatBiz Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUseBeatBiz.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-indigo-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-indigo-100">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA section */}
        <section className="mb-20 bg-indigo-600 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Ready to take your music production to the next level?</h2>
          <p className="text-xl mb-8 text-center">Schedule a demo and see how BeatBiz Pro can transform your workflow.</p>
          <div className="text-center">
            <Link to="/request-demo" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-indigo-100 transition duration-300">
              Request a Demo
            </Link>
          </div>
        </section>
        
        {/* Additional features section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">More Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-blue-100 bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-20 hover:border hover:border-white">
                <div className="text-indigo-300 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-indigo-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Pricing section */}
        <section className="mb-20 pt-20" ref={pricingRef} id="pricing">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-blue-100 bg-opacity-10 rounded-lg overflow-hidden transition-all duration-300 hover:bg-opacity-20 hover:border hover:border-white">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold text-center mb-6">{plan.price}<span className="text-xl font-normal">/month</span></p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check size={20} className="text-green-400 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-transparent flex justify-center">
                  <button className="bg-transparent text-blue-400 border border-blue-400 py-2 px-4 rounded-full hover:bg-blue-400 hover:text-white transition duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage