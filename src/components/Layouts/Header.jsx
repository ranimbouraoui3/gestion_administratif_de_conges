import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn";
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut";
import { useEffect, useState } from "react";

export const Header = () => {
    const [dropdown, setDropdown] = useState(true);
    const [activeTab, setActiveTab] = useState("account"); // État pour suivre l'onglet actif

    const activeClass =
        "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent";
    const inActiveClass =
        "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

    const user11 = true;


    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    );
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));

        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else document.documentElement.classList.remove("dark");
    }, [darkMode]);


    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
        setActiveTab(dropdown ? "" : "account"); // Marque "Account" comme actif
    };

    return (
        <header >
            <nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="OffTimeMaster" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Adminity Master
                        </span>
                    </Link>
                    <div className="w-full md:block md:w-auto">
                        <ul className="flex flex-col items-center h-full font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50
    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white
    dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        isActive && activeTab !== "account" ? activeClass : inActiveClass
                                    }
                                    onClick={() => setActiveTab("")} // Désactive "Account"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        isActive && activeTab !== "account" ? activeClass : inActiveClass
                                    }
                                    onClick={() => setActiveTab("")} // Désactive "Account"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className={`flex ${dropdown ? 'justify-center' : ''} md:justify-start`}>
                                <button
                                    onClick={toggleDropdown}
                                    className={`flex items-center justify-between w-full py-2 px-3 rounded md:p-0 ${
                                        activeTab === "account" ? activeClass : inActiveClass
                                    }`}
                                >
                                    Account
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {dropdown && !user11 && <DropdownLoggedOut/>}
                                {dropdown && user11 && <DropdownLoggedIn/>}
                            </li>
                            <li>
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    data-tooltip-target=" navbar-search-example-toggle-dark-mode-tooltip"
                                    type="button"
                                    data-toggle-dark="light"
                                    className="max-md:mt-2  flex items-center w-7 h-7 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mr-1"
                                >
                                    {!darkMode ? (
                                        <svg
                                            data-toggle-icon="moon"
                                            className="w-3.5 h-3.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 18 20"
                                        >
                                            <path
                                                d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            data-toggle-icon="sun"
                                            className="w-3.5 h-3.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                                        </svg>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
