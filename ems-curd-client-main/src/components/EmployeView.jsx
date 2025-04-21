import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEmployee } from "../services/EmployeeService";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Globe,
  BadgePlus,
  Badge,
  ArrowLeftCircle,
} from "lucide-react";

function EmployeeView() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setEmployee(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const baseUrl = import.meta.env.VITE_API_URL.replace("/api/employees", "");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 sm:p-10 space-y-6">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 bg-yellow-400 py-3 rounded-md shadow-inner">
          Employee Details
        </h2>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Image */}
          {employee.picture ? (
            <img
              src={`${baseUrl}/uploads/${employee.picture}`}
              alt="Employee"
              className="w-36 h-36 object-cover rounded-full border-4 border-yellow-400 shadow-md"
            />
          ) : (
            <div className="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              No Image
            </div>
          )}

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base w-full">
            <InfoRow icon={<BadgePlus size={18} />} label="Employee ID" value={id} />
            <InfoRow icon={<User size={18} />} label="First Name" value={employee.firstName} />
            <InfoRow icon={<Badge size={18} />} label="Last Name" value={employee.lastName} />
            <InfoRow icon={<Mail size={18} />} label="Email" value={employee.email} />
            <InfoRow icon={<Phone size={18} />} label="Mobile Number" value={employee.mobileNumber} />
            <InfoRow icon={<Calendar size={18} />} label="Date of Birth" value={employee.dateofbirth} />
            <InfoRow icon={<User size={18} />} label="Gender" value={employee.gender} />
            <InfoRow icon={<Globe size={18} />} label="Country" value={employee.country} />
          </div>
        </div>

        {/* Button */}
        <Link to="/">
          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all">
            <ArrowLeftCircle size={20} />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

const InfoRow = ({ icon, label, value }) => (
  <p className="flex items-center gap-2">
    {icon}
    <span className="font-semibold">{label}:</span> {value}
  </p>
);

export default EmployeeView;
