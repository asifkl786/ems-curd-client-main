import React, { useEffect, useState } from "react";
import GroupedEmployees from "../components/GroupedEmployees";
import { fetchGroupedByDepartment } from "../services/EmployeeService";

const GroupedView = () => {
  const [groupedData, setGroupedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGroupedByDepartment()
      .then((res) => {
        setGroupedData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching grouped data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Employees by Department
        </h1>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <GroupedEmployees data={groupedData} />
        )}
      </div>
    </div>
  );
};

export default GroupedView;
