import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Music } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToPricing: true } });
    }
  };

  return (
    <header className="bg-indigo-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center text-white">
          <Music size={32} className="mr-2" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold">BeatBiz Pro</span>
            <span className="text-sm">The Producers CRM</span>
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/features" className="text-white hover:text-indigo-200">Features</Link></li>
            <li><a href="#pricing" onClick={scrollToPricing} className="text-white hover:text-indigo-200">Pricing</a></li>
            <li><Link to="/marketplace" className="text-white hover:text-indigo-200">Marketplace</Link></li>
            <li><Link to="/login" className="text-white hover:text-indigo-200">Login</Link></li>
            <li><Link to="/register" className="bg-white text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-100 transition duration-300">Sign Up</Link></li>
            {/* Development links */}
            <li><Link to="/admin" className="text-yellow-300 hover:text-yellow-100">Admin Dashboard</Link></li>
            <li><Link to="/member" className="text-green-300 hover:text-green-100">Member Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;