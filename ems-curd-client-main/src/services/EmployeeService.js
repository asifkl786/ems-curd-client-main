import axios from 'axios';


       // Automatically use the correct API URL based on environment
         const API_URL = import.meta.env.VITE_API_URL;
  //const API_URL = 'https://outstanding-passion-production.up.railway.app/api/employees';

  //const API_URL = 'http://localhost:8080/api/employees';

 // const API_URL = "https://ems-server-with-logger-1.onrender.com";
  //const API_URL = "https://ems-server-with-logger-1.onrender.com/api/employees"
  //          const API_URL = "https://ems-server-with-logger-2.onrender.com/api/employees"

  // Fetch TotalNumber of employees
    export const fetchTotalNumberOfEmployees = async () => {
       return await axios.get(`${API_URL}/totalEmployee`)
    }; 

  // Fetch Employee page by page  
     export const fetchEmployees = (page = 0, size = 4) => {
      return axios.get(`${API_URL}/paginated?page=${page}&size=${size}`);
     };
  // Create a new employee
 // export const createEmployee = (formData) => axios.post(API_URL,formData);

  // Fetch a single employee by ID
  export const getEmployee = (employeeId) => axios.get(API_URL + '/' + employeeId);

  // Update an existing employee
 // export const updateEmployee = (employeeId,formData) => axios.put(API_URL + '/' + employeeId , formData);
  
  // Delete an employee
  export const deleteEmployee = (employeeId) => axios.delete(API_URL + '/' + employeeId);

  {/*export const deleteEmployee = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
  };*/}

  // Create new Employee
  export const createEmployee = async (formData) => {
    const data = new FormData();
  
    for (const key in formData) {
      data.append(key, formData[key]);
    }
  
    return axios.post(`${API_URL}/create`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  
  // update Employee 
  export const updateEmployee = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
  };
  
  // fetch grouping by department data
  export const fetchGroupedByDepartment = async() => {
    return await axios.get(`${API_URL}/grouped-by-department`)
  };

  // fetch department distribution data from employee
  export const fetchDepartmentDistribution = async() => {
    return await axios.get(`${API_URL}/department-distribution`);
  };

  // fetch monthly data from table
  export const fetchEmployeeGrowth = async() => {
    return await axios.get(`${API_URL}/employee-growth`)
  };