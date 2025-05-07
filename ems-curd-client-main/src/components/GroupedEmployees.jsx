import React from "react";

const GroupedEmployees = ({ data }) => {

  const baseUrl = import.meta.env.VITE_API_URL.replace("/api/employees", "");

  return (
    <div className="p-6 space-y-6">
      {data.map((dept) => (
        <div
          key={dept.department}
          className="bg-white shadow rounded-xl p-4 border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-blue-700">
              {dept.department} Department ({dept.totalCount})
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dept.employees.map((emp) => (
              <div
                key={emp.id}
                className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                <img
                  src={`${baseUrl}/uploads/${emp.picture}`}
                 // src={`/uploads/${emp.picture}`}
                  alt={emp.firstName}
                  className="w-20 h-20 object-cover rounded-full mx-auto mb-2"
                />
                <div className="text-center">
                  <h3 className="font-medium text-gray-800">
                   <span>Emp Name ::   </span> {emp.firstName} {emp.middleName || ""} {emp.lastName}
                  </h3>
                  <p className="text-sm text-gray-600"><span>Emp mail::   </span>{emp.email}</p>
                  <p className="text-sm text-gray-500"><span>Emp country::   </span>{emp.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupedEmployees;
