import React from 'react';

const StatsCard = ({ title, value, color }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
};

export default StatsCard;
