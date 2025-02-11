import "./styles/UserRolesCard.css"
export const UserRolesCard = () => {
    const roles = [
        {
            title: "Admin",
            description:
                "Admins have full control over the system. They can manage users, oversee leave requests, and configure system settings.",
            icon: "🛠️",
        },
        {
            title: "Manager",
            description:
                "Managers can approve or reject leave requests from their team members. They also oversee departmental leave data.",
            icon: "👨‍💼",
        },
        {
            title: "Employee",
            description:
                "Employees can submit leave requests, check leave balances, and track the status of their requests.",
            icon: "👩‍💻",
        },
        {
            title: "HR",
            description:
                "HR manages the overall leave data, generates reports, and ensures compliance with company policies.",
            icon: "📋",
        },
    ];

    return (
        <div className="user-roles-card">
            <h2 className="roles-title">User Roles in the Leave Management System</h2>
            <div className="roles-container">
                {roles.map((role, index) => (
                    <div key={index} className="role-card">
                        <div className="role-icon">{role.icon}</div>
                        <h3 className="role-title">{role.title}</h3>
                        <p className="role-description">{role.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
