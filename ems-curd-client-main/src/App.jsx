import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddEmployee from "./components/AddEmployee";
//import Home from "./components/Home";
import EmployeeList from "./components/EmployeeList";
import EmployeeView from "./components/EmployeeView";
import UpdateEmployee from "./components/UpdateEmployee";


export default function App() {

  return (
    <>
     <Router>
       <Navbar />
       <Routes>
         {/* // http://localhost:5173  */}
         {/*  <Route path='/' exact element = {<Home />}></Route>  */}
        
         {/* // http://localhost:5173  */}
         <Route path='/' exact element = {<EmployeeList />}></Route>
         {/* // http://localhost:5173/addEmployee  */}
         <Route path='/add-employee' element = {<AddEmployee />}></Route>
          {/* // http://localhost:5173/view-employee  */}
          <Route path='/view-employee/:id' element = {<EmployeeView />}></Route>
           {/* // http://localhost:5173/edit-employee/1  */}
           <Route path='/edit-employee/:id' element = {<UpdateEmployee />}></Route>
       </Routes>
     </Router>
    </>
  )
}