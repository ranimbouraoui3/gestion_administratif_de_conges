import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/employee.css";

export const EmployeeProfile = () => {
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editValues, setEditValues] = useState({});

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

    const handleEdit = (label, value) => {
        setIsEditing(true);
        setEditValues(prevValues => ({ ...prevValues, [label]: value }));
    };

    const handleChange = (e, label) => {
        const { value } = e.target;
        setEditValues(prevValues => ({ ...prevValues, [label]: value }));
    };

    const handleSave = () => {
        // Implémenter la logique pour envoyer les données modifiées au serveur (PUT, PATCH)
        setEmployee(prev => ({ ...prev, ...editValues }));
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditValues({});
    };

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
                    <div key={index} className="flex items-center group">
                        <p className="font-semibold text-gray-700 w-60">{item.label} :</p>

                        <div className="flex-grow relative group-hover:border-blue-500 group-hover:shadow-lg transition-all duration-300 ease-in-out">
                            <div className="bg-gray-100 p-3 rounded-lg shadow-sm text-gray-700 h-12 flex items-center truncate w-full min-w-[200px] md:min-w-[325px] lg:min-w-[425px] group-hover:bg-blue-50 group-hover:text-blue-700">
                                {isEditing && editValues[item.label] !== undefined ? (
                                    <input
                                        type="text"
                                        value={editValues[item.label]}
                                        onChange={(e) => handleChange(e, item.label)}
                                        className="w-full h-full bg-transparent text-gray-700 border-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
                                    />
                                ) : (
                                    item.value || "—"
                                )}
                            </div>
                            <button
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 hover:scale-110 transition-all duration-200"
                                onClick={() => handleEdit(item.label, item.value)}
                            >
                                <i className={`bi bi-${isEditing ? 'check' : 'pencil-square'} text-xl`}></i>
                            </button>
                        </div>
                    </div>
                ))}

                {isEditing && (
                    <div className="flex justify-end mt-4 space-x-4">
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
                        >
                            Enregistrer
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-300"
                        >
                            Annuler
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
