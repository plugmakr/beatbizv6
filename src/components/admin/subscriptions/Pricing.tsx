import React, { useState } from 'react';
import { Save, DollarSign, Percent } from 'lucide-react';

const Pricing: React.FC = () => {
  const [pricingSettings, setPricingSettings] = useState({
    currency: 'USD',
    taxRate: 10,
    offerFreeTrial: true,
    freeTrialDays: 14,
    offerAnnualDiscount: true,
    annualDiscountPercentage: 20,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setPricingSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
               type === 'number' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving pricing settings:', pricingSettings);
    // Implement API call to save settings
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Pricing Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="currency">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              value={pricingSettings.currency}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="taxRate">
              Tax Rate (%)
            </label>
            <input
              type="number"
              id="taxRate"
              name="taxRate"
              value={pricingSettings.taxRate}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.1"
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="offerFreeTrial"
                checked={pricingSettings.offerFreeTrial}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">Offer Free Trial</span>
            </label>
          </div>
          {pricingSettings.offerFreeTrial && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="freeTrialDays">
                Free Trial Duration (days)
              </label>
              <input
                type="number"
                id="freeTrialDays"
                name="freeTrialDays"
                value={pricingSettings.freeTrialDays}
                onChange={handleChange}
                min="1"
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="offerAnnualDiscount"
                checked={pricingSettings.offerAnnualDiscount}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">Offer Annual Discount</span>
            </label>
          </div>
          {pricingSettings.offerAnnualDiscount && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="annualDiscountPercentage">
                Annual Discount (%)
              </label>
              <input
                type="number"
                id="annualDiscountPercentage"
                name="annualDiscountPercentage"
                value={pricingSettings.annualDiscountPercentage}
                onChange={handleChange}
                min="0"
                max="100"
                step="1"
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
          >
            <Save size={20} className="mr-2" />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Pricing;