import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  key: string;
  subItems: { key: string; label: string }[];
}

interface AccordionMenuProps {
  menuItems: MenuItem[];
  basePath: string;
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({ menuItems, basePath }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (key: string) => {
    setActiveSection(activeSection === key ? null : key);
  };

  return (
    <nav>
      {menuItems.map((item) => (
        <div key={item.key} className="mb-2">
          <button
            onClick={() => toggleSection(item.key)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-indigo-600 transition-colors duration-200 text-white"
          >
            <div className="flex items-center">
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </div>
            {activeSection === item.key ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </button>
          {activeSection === item.key && (
            <div className="ml-6 mt-2 space-y-2">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.key}
                  to={`${basePath}/${item.key}/${subItem.key}`}
                  className="block p-2 rounded hover:bg-indigo-600 transition-colors duration-200 text-white"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default AccordionMenu;