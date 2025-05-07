import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 flex space-x-4">
      <button
        onClick={() => navigate('/add-employee')}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        + Add Employee
      </button>
      <button
        onClick={() => navigate('/employees')}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        View Employee List
      </button>
    </div>
  );
};

export default QuickActions;
