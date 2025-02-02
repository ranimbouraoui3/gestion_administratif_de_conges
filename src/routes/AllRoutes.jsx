import { Routes, Route } from 'react-router-dom';
import {Login} from "../pages/Login";
import {About} from "../pages/about";
import {HomePage} from "../pages/Home/HomePage.jsx";
import {AdminHome} from "../pages/admin/AdminHome.jsx"
import {EmployeeHome} from "../pages/employee/EmployeeHome.jsx"
import {Users} from "../pages/admin/Users.jsx"
export const AllRoutes = () => {  // Capitalized component name
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminHome />} />
                <Route path="users" element={<EmployeeHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="users" element={<Users />}/>


        </Routes>
    );
};
