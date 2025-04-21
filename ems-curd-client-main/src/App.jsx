import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import EmployeView from "./components/EmployeView";
import ListEmployee from "./components/ListEmployee";


export default function App() {

  return (
    <>
     <Router>
       <Navbar />
       <Routes>
         {/* // http://localhost:5173  */}
         {/*  <Route path='/' exact element = {<Home />}></Route>  */}
        
         {/* // http://localhost:5173  */}
         <Route path='/' exact element = {<ListEmployee />}></Route>
         {/* // http://localhost:5173/addEmployee  */}
         <Route path='/add-employee' element = {<AddEmployee />}></Route>
          {/* // http://localhost:5173/view-employee  */}
          <Route path='/view-employee/:id' element = {<EmployeView />}></Route>
           {/* // http://localhost:5173/edit-employee/1  */}
           <Route path='/edit-employee/:id' element = {<UpdateEmployee />}></Route>
       </Routes>
     </Router>
    </>
  )
}