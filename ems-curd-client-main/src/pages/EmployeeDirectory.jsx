import React, { useEffect, useState } from "react";
import { fetchGroupedByDepartment } from "../services/EmployeeService";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeModal from "../components/EmployeeModal";
import FilterSearchBar from "../components/FilterSearchBar";
import { all } from "axios";

const EmployeeDirectory = () => {
  const [data, setData] = useState([]);
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchGroupedByDepartment()
      .then((res) => setData(res.data))
      .catch(console.error);
     // console.log(res.data);
  }, []);

  const allEmployees = data.flatMap(d => d.employees);
  const departments = ["All", ...new Set(data.map(d => d.department))];
  //console.log(allEmployees,departments);

  const filtered = allEmployees.filter(emp => {
    const matchesDept = selectedDept === "All" || emp.department.toLowerCase() === selectedDept.toLowerCase();
    //const matchesDept = selectedDept === "All" || emp.department === selectedDept;
    const matchesSearch = `${emp.firstName} ${emp.lastName} ${emp.email}`.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Employee Directory</h1>

      <FilterSearchBar
        departments={departments}
        selected={selectedDept}
        onChangeDept={setSelectedDept}
        onSearch={setSearchTerm}
      />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {filtered.map(emp => (
          <EmployeeCard key={emp.id} employee={emp} onClick={() => setModalData(emp)} />
        ))}
      </div>

      {modalData && <EmployeeModal employee={modalData} onClose={() => setModalData(null)} />}
    </div>
  );
};

export default EmployeeDirectory;
