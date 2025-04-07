
import  React,{ useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { getEmployee } from "../services/EmployeeService";

function EmployeeView() {
  
  const [firstName, setFirstName] = useState([]);
  const [lastName, setlastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [mobileNumber , setMobileNumber] = useState([]);
  const [dateofbirth, setDateOfBirth] = useState([]);
  const [gender, setGender] = useState([]);
  const [country, setCountry] = useState([]);
  const [picture , setPicture] = useState([]);
  

  const [errors, setErrors] = useState({
      firstName: "",
      middleName:'',
      lastName:'',
      email:'',
      mobileNumber:''
  })
  
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
  


  return (
    <div className="max-w-lg mx-auto p-4 mt-14 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-2 text-center bg-yellow-400">Employee Details</h2>
     
      <p><strong>Employee Id:</strong>{id}</p>
     <p><strong>First Name:</strong>{firstName}</p>
      <p><strong>Last Name:</strong>{lastName}</p>
      <p><strong>Email:</strong>{email}</p>
      <p><strong>Mobile Number:</strong>{mobileNumber}</p>
      <p><strong>Date Of Birth:</strong>{dateofbirth}</p>
      <p><strong>Gender:</strong>{gender}</p>
      <p><strong>Country Name:</strong>{country}</p>
      <p><strong>Picture:</strong>{picture}</p>
      <p><strong>Position:</strong></p>
    {/*
     <div>
      {employees.map((employee, id) => (
        <div key={id}>
          <p><strong>First Name:</strong>{employee.firstName}</p>
        </div>
      ))}
    </div>
    */}
     
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
      >
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

export default EmployeeView;
