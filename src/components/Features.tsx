import React from 'react';
import { Link } from 'react-router-dom';
import { Music, DollarSign, Users, BarChart2, Youtube, TrendingUp, Globe, Zap, Shield, Award, Star, Briefcase, Rocket, Target, FileText, HelpCircle } from 'lucide-react';

const FeatureSection: React.FC<{ icon: React.ReactNode; title: string; description: string; details: string[] }> = ({ icon, title, description, details }) => (
  <div className="mb-12 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-opacity-20 hover:border hover:border-white">
    <div className="flex items-center mb-4">
      <div className="text-indigo-300 mr-4">{icon}</div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <p className="text-lg mb-4 text-indigo-100">{description}</p>
    <ul className="list-disc list-inside space-y-2 text-indigo-200">
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Music size={32} />,
      title: "Project Management",
      description: "Streamline your music production workflow with our comprehensive project management tools.",
      details: [
        "Organize and track multiple projects simultaneously",
        "Set milestones, deadlines, and task assignments",
        "Collaborate with team members and clients in real-time",
        "Integrate with popular DAWs for seamless workflow",
        "Track project progress and generate reports"
      ]
    },
    {
      icon: <DollarSign size={32} />,
      title: "Financial Tools",
      description: "Take control of your finances and maximize your earnings as a music producer.",
      details: [
        "Generate professional invoices and track payments",
        "Monitor expenses and calculate profit margins",
        "Automate royalty calculations and distributions",
        "Generate financial reports for tax purposes",
        "Integrate with popular accounting software"
      ]
    },
    {
      icon: <Users size={32} />,
      title: "Client Management",
      description: "Build and maintain strong relationships with your clients and collaborators.",
      details: [
        "Centralize client information and communication history",
        "Manage contracts and agreements efficiently",
        "Schedule meetings and track client interactions",
        "Provide a client portal for seamless collaboration",
        "Send automated follow-ups and nurture campaigns"
      ]
    },
    {
      icon: <BarChart2 size={32} />,
      title: "Analytics",
      description: "Gain valuable insights to grow your music production business.",
      details: [
        "Track beat sales and revenue trends",
        "Analyze listener demographics and preferences",
        "Monitor social media engagement and growth",
        "Identify your most successful marketing channels",
        "Track YouTube video views and performance metrics"
      ]
    },
    {
      icon: <Youtube size={32} />,
      title: "Social Media Management",
      description: "Grow your online presence and engage with your audience effectively.",
      details: [
        "Manage multiple social media accounts from one dashboard",
        "Schedule and automate posts across platforms",
        "Monitor comments and engage with your audience",
        "Analyze social media performance and growth",
        "Track YouTube video views, likes, and subscriber growth"
      ]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Marketing Tools",
      description: "Promote your music and grow your audience with powerful marketing features.",
      details: [
        "Create and manage email marketing campaigns",
        "Design custom landing pages for beat promotions",
        "Implement retargeting strategies for potential customers",
        "Analyze campaign performance and ROI",
        "Integrate with major advertising platforms"
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Website Builder",
      description: "Create a stunning portfolio website to showcase your work and sell beats.",
      details: [
        "Choose from professionally designed templates",
        "Customize your site with a drag-and-drop interface",
        "Integrate e-commerce features to sell beats directly",
        "Optimize your site for search engines and mobile devices",
        "Easily update and manage your content"
      ]
    },
    {
      icon: <Zap size={32} />,
      title: "Collaboration Tools",
      description: "Work seamlessly with other producers, artists, and team members.",
      details: [
        "Share and collaborate on projects in real-time",
        "Communicate through built-in messaging and video conferencing",
        "Manage version control for your music files",
        "Assign tasks and track progress within collaborations",
        "Securely share files and control access permissions"
      ]
    },
    {
      icon: <Shield size={32} />,
      title: "Rights Management",
      description: "Protect your intellectual property and manage licenses effectively.",
      details: [
        "Track and manage your copyrights and publishing rights",
        "Generate and manage licensing agreements",
        "Monitor usage and collect royalties",
        "Access PRO (Performance Rights Organization) assistance",
        "Stay compliant with music industry regulations"
      ]
    },
    {
      icon: <Briefcase size={32} />,
      title: "Professional Resources",
      description: "Access industry insights and educational content to grow your career.",
      details: [
        "Access a library of legal documents and contract templates",
        "Stay updated with industry news and trends",
        "Participate in webinars and online workshops",
        "Connect with industry professionals and mentors",
        "Access career development resources and guides"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">BeatBiz Pro Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureSection key={index} {...feature} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/register" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-indigo-100 transition duration-300 mr-4">
            Start Your Free Trial
          </Link>
          <Link to="/#pricing" className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition duration-300">
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;