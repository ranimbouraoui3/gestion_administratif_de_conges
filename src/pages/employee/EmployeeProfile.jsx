import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/employee.css"
export const EmployeeProfile = () => {
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get("/api/employes");

                if (Array.isArray(response.data) && response.data.length > 0) {
                    setEmployee(response.data[0]);
                } else {
                    setError("Aucun employé trouvé.");
                }
            } catch (error) {
                console.error("Erreur lors du chargement des données :", error);
                if (error.response) {
                    setError(`Erreur ${error.response.status} : ${error.response.data.message || "Une erreur est survenue."}`);
                } else if (error.request) {
                    setError("Le serveur ne répond pas. Vérifiez votre connexion.");
                } else {
                    setError("Une erreur inconnue s'est produite.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchEmployee();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!employee) return <p>Aucun employé trouvé.</p>;

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-12 mt-10 mb-14">
            <h2 className="text-2xl font-bold text-center mb-6">
                Profil de
                <span className="name-box">
                  {employee.nom} {employee.prenom}
                </span>
            </h2>


            <div className="space-y-4">
                {[
                    { label: "Nom", value: employee.nom },
                    { label: "Prénom", value: employee.prenom },
                    { label: "Email", value: employee.email },
                    { label: "Téléphone", value: employee.telephone },
                    { label: "Salaire", value: `${employee.salaire} TND` },
                    { label: "Jours de congé disponibles", value: employee.jours_conges_disponibles },
                    { label: "Date d'embauche", value: new Date(employee.date_embauche).toLocaleDateString() },
                    { label: "Département", value: employee.departement ? employee.departement.nom : "N/A" },
                    { label: "Sexe", value: employee.sexe },
                    { label: "Actif", value: employee.actif ? "Oui" : "Non" },
                    { label: "Handicap", value: employee.handicap ? "Oui" : "Non" }
                ].map((item, index) => (
                    <div key={index} className="flex items-center">
                        <p className="font-semibold text-gray-700 w-60">{item.label} :</p>

                        <div className="flex-grow relative">
                            <div className="bg-gray-100 p-3 rounded-lg shadow-sm text-gray-700 h-12 flex items-center truncate w-full min-w-[200px] md:min-w-[325px] lg:min-w-[425px]">
                                {item.value || "—"}
                            </div>
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 hover:scale-110 transition-all duration-200">
                                <i className="bi bi-pencil-square text-xl"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
