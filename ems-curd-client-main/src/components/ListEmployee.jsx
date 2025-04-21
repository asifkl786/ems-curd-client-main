import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { fetchEmployees, deleteEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const pageSize = 5; // Records per page

  const navigator = useNavigate();

  useEffect(() => {
    loadEmployees(currentPage);
  }, [currentPage]);

  const loadEmployees = async (page) => {
    try {
      const response = await fetchEmployees(page, pageSize);
      setEmployees(response.data.employees); // 👈 FIXED THIS LINE
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
      toast.success(`Loaded page ${page + 1}`);
    } catch (error) {
      toast.error("Failed to fetch employees");
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    navigator(`/edit-employee/${id}`);
  };

  const ViewEmployee = (id) => {
    navigator(`/view-employee/${id}`);
  };

  const removeEmployee = (id) => {
    toast.success('Employee Deleted Successfully...', {
      position: "top-center", theme: "colored"
    });
    deleteEmployee(id)
      .then(() => {
        loadEmployees(currentPage);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.error(error);
      });
  };

  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4 text-center bg-indigo-950 text-white">Employee List</h1>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-slate-400">
            <th className="py-2 px-4 border-b">Id</th>
            <th className="py-2 px-4 border-b">F_Name</th>
            <th className="py-2 px-4 border-b">L_Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Mobile</th>
            <th className="py-2 px-4 border-b">D.O.B</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Country</th>
            <th className="py-2 px-4 border-b">Picture</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="py-2 px-4 border-b">{employee.id}</td>
              <td className="py-2 px-4 border-b">{employee.firstName}</td>
              <td className="py-2 px-4 border-b">{employee.lastName}</td>
              <td className="py-2 px-4 border-b">{employee.email}</td>
              <td className="py-2 px-4 border-b">{employee.mobileNumber}</td>
              <td className="py-2 px-4 border-b">{employee.dateofbirth}</td>
              <td className="py-2 px-4 border-b">{employee.gender}</td>
              <td className="py-2 px-4 border-b">{employee.country}</td>
              <td className="py-2 px-4 border-b">
                <img
                  src={`http://localhost:8080/uploads/${employee.picture}`}
                  alt="employee"
                  className="w-10 h-10 object-cover rounded-full mx-auto"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center space-x-2">
                  <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" onClick={() => ViewEmployee(employee.id)}>
                    <AiOutlineEye size={16} />
                  </button>
                  <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600" onClick={() => handleEdit(employee.id)}>
                    <AiOutlineEdit size={16} />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600" onClick={() => removeEmployee(employee.id)}>
                    <AiOutlineDelete size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`px-3 py-1 rounded ${currentPage === index ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ListEmployee;
