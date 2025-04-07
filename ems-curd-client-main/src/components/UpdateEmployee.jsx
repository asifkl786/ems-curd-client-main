import  React,{ useEffect, useState } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import { getEmployee,updateEmployee } from "../services/EmployeeService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateEmployee = () => {

  // Thease state save data come  from database
  const [firstName, setFirstName] = useState([]);
  const [lastName, setlastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [mobileNumber , setMobileNumber] = useState([]);
  const [dateofbirth , setDateOfBirth] = useState([]);
  const [gender , setGender] = useState([]);
  const [country , setCountry] = useState([]);
  const [file , setFile] = useState([]);
  

  const [errors, setErrors] = useState({
      firstName: "",
      lastName:'',
      email:'',
      mobileNumber:'',
      dateofbirth:'',
      gender:'',
      country:'',
      picture:''
  })
   
  
  // Thease line of code naviagate to the components
    const navigator = useNavigate();
    const {id} = useParams();

  // This method emplooyee (is method se data database se aaya h corrosponding id)
  useEffect(() =>{
         if(id){
              getEmployee(id).then((response) => {
                  setFirstName(response.data.firstName);
                  setlastName(response.data.lastName);
                  setEmail(response.data.email);
                  setMobileNumber(response.data.mobileNumber);
                  setDateOfBirth(response.data.dateofbirth);
                  setGender(response.data.gender);
                  setCountry(response.data.country);
                  setPicture(response.data.picture);
              }).catch(error => {
                  console.error(error)
              })
         }
  }, [id])
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = {firstName,lastName,email,mobileNumber,gender,dateofbirth,file,country};
    updateEmployee(id,formData).then((response) => {
      toast.success('Update Employee Successfully...',{
        position: "top-center",theme: "colored"
     });
      console.log(response.data);
      navigator('/')
      }).catch(error => {
        toast.error("Something went wrong") 
        console.error(error);
  })
  console.log('Form Data Submitted:', formData);
  
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-4 mt-4 bg-white shadow-lg rounded-lg">
          <h2 className="p-3 bg-yellow-400 text-2xl font-bold mb-2 text-gray-700 text-center">Update Employee Information Page</h2>
            <form onSubmit={handleSubmit}>
              <div className='row gap-2 grid grid-cols-2'>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                <label htmlFor="lastname" className="block text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type='text'
                  id="lastname"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your lastname"
                  required
                />
                </div>
              </div>

              <div className='row gap-2 grid grid-cols-2'>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type='number'
                  id="mobilenumber"
                  name="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your lastname"
                  required
                />
                </div>
              </div>

              <div className='row gap-2 grid grid-cols-2'>
                <div className="mb-4">
                  <label htmlFor="lastname" className="block text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type='date'
                    id="dateofbirth"
                    name="dateofbirth"
                    value={dateofbirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your lastname"
                    required
                  />
                </div>
                <fieldset>
              <legend className="text-gray-700 mb-1">Gender</legend>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="Other"
                    checked={gender === 'Other'}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Other</span>
                </label>
              </div>
                </fieldset>
              </div>
             
              <div className='row gap-2 grid grid-cols-2'>
                  <div className="mb-4">
                      <label htmlFor="country"className="block text-gray-700 mb-1">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="Select your country" disabled>Select your country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="India">India</option>
                      </select>
             </div>

                  <div className="mb-4">
                  <label htmlFor="file" className="block text-gray-700 mb-1">
                    Upload File
                  </label>
                  <input
                    type='file'
                    id="file"
                    name="file"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your lastname"
                    required
                  />
                  </div>
              </div>
        
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update Employee Information
              </button>
            </form>
      </div>      
   </>
    
  )
}

export default UpdateEmployee