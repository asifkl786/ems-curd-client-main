import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { fetchEmployees,deleteEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  
  // Thease function fetch employee data from database
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const response = await fetchEmployees();
    setEmployees(response.data);
    console.log(employees);
  }
  
  // Thease line of code naviagate to the components
  const navigator = useNavigate();

  // Thease function redirect to view-employee components
  function ViewEmployee(id){
    navigator(`/view-employee/${id}`)
  }

  const handleEdit = (id) => {
    navigator(`/edit-employee/${id}`)
  };

  // Thease function delete data only from UI not delete from  database
  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  // This method delete employee from the table
  function removeEmployee(id){
    toast.success('Employee Delete Successfully...',{
      position: "top-center",theme: "colored"
   });
    console.log(id);
    deleteEmployee(id).then((response) =>{
      loadEmployees();
    }).catch(error => {
        toast.error("Something went wrong")
        console.error(error)
    })
}


  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4 text-center bg-indigo-950 text-white">Employee List</h1>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-slate-400">
            <th className="py-2 px-4 border-b-2 border-gray-200">Id</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">F_Name</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">L_Name</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Email</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Mobile</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">D.O.B</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Gender</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Country</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Picture</th>
            <th className="py-2 px-4 border-b-2 border-gray-200">Actions</th>
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
              {/* <td className="py-2 px-4 border-b">{employee.picture}</td>*/} 
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
                      <button
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        onClick={() => ViewEmployee(employee.id)}
                      >
                        <AiOutlineEye size={16} />
                      </button>
                      <button
                        className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
                        onClick={() => handleEdit(employee.id)}
                      >
                        <AiOutlineEdit size={16} />
                      </button>
                      <button
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                        onClick={() => removeEmployee(employee.id)}
                      >
                        <AiOutlineDelete size={16} />
                      </button>
                    </div>
               </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
