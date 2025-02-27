import {FiBell} from "react-icons/fi";

export const EmployeeDashboard = () => {
    return (
        <div className="flex justify-between p-6 space-x-6">
            {/* Left side (Profile Info, Notifications, etc.) */}
            <div className="w-1/3">
                {/* Profile Info Box */}
                <div className="max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profile Info</h2>
                    <p className="text-gray-600 dark:text-gray-300">Details about the user.</p>
                </div>

                {/* Notifications Box */}
                <div className="max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                                <FiBell className="w-5 h-5 mr-2" />
                                Notifications
                            </h2>
                            <span className="bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    3 nouvelles
                  </span>
                        </div>
                        <div className="space-y-4">
                            {[
                                { title: "Demande de congés approuvée", time: "Il y a 2h", urgent: true },
                                { title: "Nouveau document à signer", time: "Il y a 3h" },
                                { title: "Réunion d'équipe demain", time: "Il y a 5h" },
                            ].map((notification, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-150"
                                >
                                    <div className="flex-shrink-0">
                                        <div
                                            className={`w-2 h-2 mt-2 rounded-full ${notification.urgent ? "bg-red-500" : "bg-indigo-500"}`}
                                        ></div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>




                {/* Admin to Contact Box (Now swapped) */}
                <div className="max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Admin à Contacter</h2>
                    <div className="space-y-4">
                        {[
                            { name: "Sophie Martin", role: "RH Manager" },
                            { name: "Pierre Dubois", role: "Admin Système" },
                            { name: "Marie Lambert", role: "Support RH" },
                        ].map((admin, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-150"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          {admin.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                        </span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{admin.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{admin.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Files Box (Now swapped) */}
                <div className="max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Fichiers Administratifs</h2>
                    <p className="text-gray-600 dark:text-gray-300">Upload and download administrative files.</p>
                </div>
            </div>

            {/* Right side (Requests, Tasks, etc.) */}
            <div className="w-2/3">
                <div className="flex space-x-6">
                    {/* Demandes de Conges Box */}
                    <div className="w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Demandes de Conges</h2>
                        <p className="text-gray-600 dark:text-gray-300">Total number of requests for leave.</p>
                        <p className="text-4xl text-center text-gray-900 dark:text-white">15</p>
                    </div>

                    {/* Fichiers Administratifs Box (Now swapped) */}
                    <div className="w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Fichiers Administratifs</h2>
                        <p className="text-gray-600 dark:text-gray-300">Upload and download administrative files.</p>
                    </div>
                </div>

                {/* Demandes en Cours Box */}
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Demandes en Cours</h2>
                    <p className="text-gray-600 dark:text-gray-300">Requests that are still being processed.</p>
                    <p className="text-4xl text-center text-gray-900 dark:text-white">8</p>
                </div>

                {/* To-Do Tasks Box */}
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Tâches à Faire</h2>
                    <ul className="text-gray-600 dark:text-gray-300">
                        <li>Task 1</li>
                        <li>Task 2</li>
                        <li>Task 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
