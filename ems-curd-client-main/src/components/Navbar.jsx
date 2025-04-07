import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <>
      <nav className='h-10 bg-slate-500 items-center'>
      <div className='flex justify-between'>
        <div>
            <div className='p-2 ml-20 text-white cursor-pointer'>Ems Client</div>
        </div>
        <button
        className="mb-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700">
        <Link to="/add-employee">Create New Employee</Link>
      </button>
            <div className='flex space-x-6 p-2 mr-20 text-white cursor-pointer'>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/add-employee">AddEmployee</Link></div>
              <div>Service</div>
              <div>Contact</div>
            </div>
      </div>
      </nav>
    </>
  )
}

export default Navbar