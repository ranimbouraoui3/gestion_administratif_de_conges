import {NavLink, Outlet} from "react-router-dom";
import {Users} from "./Users.jsx"

export const AdminHome = () => {
    const activeClass =
        "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group";
    const inActiveClass =
        "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group";

    return (
        <main>
            <div className="border-b border-gray-200 dark:border-gray-700 w-full">
                <ul className="flex flex-wrap justify-start  text-sm font-medium w-full text-center text-gray-500 dark:text-gray-400">
                    <li className="me-2">
                        <NavLink
                            to="/admin/profile"
                            className={({ isActive }) =>
                                isActive ? activeClass : inActiveClass
                            }
                        >
                            <svg
                                className="w-4 h-4 me-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            Profile
                        </NavLink>
                    </li>
                    <li className="me-2">
                        <NavLink
                            to="/admin/dashboard"
                            className={({ isActive }) =>
                                isActive ? activeClass : inActiveClass
                            }
                        >
                            <svg
                                className="w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 18"
                            >
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="me-2">
                        <NavLink
                            to="/admin/employee"
                            className={({ isActive }) =>
                                isActive ? activeClass : inActiveClass
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                            </svg>
                            Employés
                        </NavLink>
                    </li>
                    <li className="me-2">
                        <NavLink
                            to="/admin/conges"
                            className={({ isActive }) =>
                                isActive ? activeClass : inActiveClass
                            }
                        >
                            {/* Icône de congés (Calendrier) */}
                            <svg
                                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H5V10h14Zm-7-8h5v5h-5Z" />
                            </svg>
                            Demandes congés
                        </NavLink>
                    </li>

                    <li className="me-2">
                        <NavLink
                            to="/admin/fichiers"
                            className={({ isActive }) =>
                                isActive ? activeClass : inActiveClass
                            }
                        >
                            {/* Icône de documents */}
                            <svg
                                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm2 16H8V4h5v4h3Zm-4-8H9v2h3Zm4 4H9v2h7Z" />
                            </svg>
                            fichier administratif
                        </NavLink>
                    </li>

                    <li className="me-2">
                        <NavLink
                            to="/admin/taches"
                            className={({ isActive }) =>
                                isActive ? activeClass : inActiveClass
                            }
                        >
                            {/* Icône de liste de tâches */}
                            <svg
                                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4 5h16V7H4Zm0 4h10V11H4Zm0 4h16v2H4Zm0 4h10v2H4Z" />
                            </svg>
                            Tâches
                        </NavLink>
                    </li>
                    <li className="me-2">
                        <NavLink
                            to="/admin/statistique"
                            className={({ isActive }) =>
                                isActive ? activeClass : inActiveClass
                            }
                        >
                            <svg
                                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 21h18v-2H3Zm2-4h3v-5H5Zm5 0h3V7h-3Zm5 0h3V3h-3Z" />
                            </svg>
                            statistique
                        </NavLink>
                    </li>


                </ul>
            </div>

            <div className="p-4">
                <Outlet />
            </div>
        </main>
    );
};
