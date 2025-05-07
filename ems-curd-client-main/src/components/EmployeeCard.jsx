
const baseUrl = import.meta.env.VITE_API_URL.replace("/api/employees", "");
const EmployeeCard = ({ employee, onClick }) => (
    
    <div onClick={onClick} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
      <img
        //src={`/uploads/${employee.picture}`}
        src={`${baseUrl}/uploads/${employee.picture}`}
        alt={employee.firstName}
        className="w-16 h-16 rounded-full object-cover mx-auto mb-2"
      />
      <h3 className="text-center font-semibold">{employee.firstName}</h3>
      <p className="text-sm text-center text-gray-600">{employee.department}</p>
    </div>
  );
  export default EmployeeCard;
  