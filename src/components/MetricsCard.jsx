import React from 'react';

const MetricsCard = ({ title, value, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105">
      <div className="text-sm font-medium text-gray-500 mb-2">
        {title}
      </div>
      <div className="text-3xl font-bold mb-2 text-black">
        {value}
      </div>
      <div className="text-gray-600 text-sm">
        {description}
      </div>
    </div>
  );
};

export default MetricsCard;