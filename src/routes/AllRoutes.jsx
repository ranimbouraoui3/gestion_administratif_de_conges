import { Routes, Route } from 'react-router-dom';
import {Login} from "../pages/Login";
import {About} from "../pages/about";
import {HomePage} from "../pages/Home/HomePage.jsx";

export const AllRoutes = () => {  // Capitalized component name
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />

        </Routes>
    );
};
