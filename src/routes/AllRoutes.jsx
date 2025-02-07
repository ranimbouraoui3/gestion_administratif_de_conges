import { Routes, Route } from 'react-router-dom';
import {Login} from "../pages/Login";
import {About} from "../pages/about";
import {HomePage} from "../pages/Home/HomePage.jsx";
import {AdminHome} from "../pages/admin/AdminHome.jsx"
import {EmployeeHome} from "../pages/employee/EmployeeHome.jsx"
import {Users} from "../pages/admin/Users.jsx"
import {EmployeeProfile} from "../pages/employee/EmployeeProfile.jsx";
import {EmployeeDashboard} from "../pages/employee/EmployeeDashboard.jsx";
import {AdminProfile} from "../pages/admin/AdminProfile.jsx";
export const AllRoutes = () => {  // Capitalized component name
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminHome />} />
                <Route path="users" element={<EmployeeHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="users" element={<Users />}/>

            {/* Route parent pour /employee */}
            <Route path="/employee" element={<EmployeeHome />}>
                <Route path="profile" element={<EmployeeProfile />} />
                <Route path="dashboard" element={<EmployeeDashboard />} />
                {/*<Route path="demandes" element={<EmployeeDemandes />} />*/}
                {/*<Route path="fichiers" element={<EmployeeFichiers />} />*/}
                {/*<Route path="taches" element={<EmployeeTaches />} />*/}
            </Route>

            <Route path="/adminprofile" element={<AdminProfile />}/>

        </Routes>
    );
};
