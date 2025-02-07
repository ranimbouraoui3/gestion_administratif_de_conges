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
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications</h2>
                    <ul className="text-gray-600 dark:text-gray-300">
                        <li>Notification 1</li>
                        <li>Notification 2</li>
                        <li>Notification 3</li>
                    </ul>
                </div>

                {/* Admin to Contact Box (Now swapped) */}
                <div className="max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Admin à Contacter</h2>
                    <p className="text-gray-600 dark:text-gray-300">Admins to contact for assistance.</p>
                    <ul className="text-gray-600 dark:text-gray-300">
                        <li>Admin 1</li>
                        <li>Admin 2</li>
                        <li>Admin 3</li>
                    </ul>
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
