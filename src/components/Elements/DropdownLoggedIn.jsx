import { Link } from "react-router-dom";

export const DropdownLoggedIn = () => {
    return (
        <div
            id="dropdownAvatar"
            className="select-none absolute top-14 right-10 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
            <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton"
            >
                <li>
                    <Link
                        to="/user"
                        className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <i className="bi bi-person"></i> {/* User Icon */}
                        User
                    </Link>
                </li>
                <li>
                    <Link
                        to="/account"
                        className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <i className="bi bi-person-circle"></i> {/* Account Icon */}
                        Account
                    </Link>
                </li>
                <li>
                    <Link
                        to="/demandes"
                        className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <i className="bi bi-envelope-fill"></i> {/* Document Icon */}
                        Demandes
                    </Link>
                </li>
                <li>
                    <Link
                        to="/parametres"
                        className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <i className="bi bi-gear-fill"></i> {/* Settings Icon */}
                        Paramètre
                    </Link>
                </li>
                <li>
                    <Link
                        to="/logout"
                        className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <i className="bi bi-box-arrow-right"></i> {/* Logout Icon */}
                        Logout
                    </Link>
                </li>

            </ul>
        </div>
    );
};