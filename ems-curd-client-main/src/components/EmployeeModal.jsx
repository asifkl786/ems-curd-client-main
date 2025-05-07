const baseUrl = import.meta.env.VITE_API_URL.replace("/api/employees", "");

const EmployeeModal = ({ employee, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">×</button>
        <img
          src={`${baseUrl}/uploads/${employee.picture}`}
        //  src={`/uploads/${employee.picture}`}
          alt={employee.firstName}
          className="w-24 h-24 rounded-full object-cover mx-auto"
        />
        <h2 className="text-xl font-bold text-center mt-4">{employee.firstName}</h2>
        <p className="text-center text-gray-600">{employee.email}</p>
        <div className="mt-4 text-sm text-gray-700 space-y-1">
          <p><strong>Mobile:</strong> {employee.mobileNumber}</p>
          <p><strong>Gender:</strong> {employee.gender}</p>
          <p><strong>Country:</strong> {employee.country}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>DOB:</strong> {employee.dateofbirth}</p>
        </div>
      </div>
    </div>
  );
  export default EmployeeModal;
  