import { useEffect, useState } from "react";
import axios from "axios";

export const AdminProfile = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                // Modifier l'URL de l'API pour récupérer les données de l'admin
                const response = await axios.get("/api/admins");

                if (Array.isArray(response.data) && response.data.length > 0) {
                    setAdmin(response.data[0]); // Ici, je prends le premier admin
                } else {
                    setError("Aucun administrateur trouvé.");
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

        fetchAdmin();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!admin) return <p>Aucun administrateur trouvé.</p>;

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-12 mt-10 mb-14">
            <h2 className="text-2xl font-bold text-center mb-6">Profil de {admin.nom} {admin.prenom}</h2>

            <div className="space-y-4">
                {[
                    { label: "Nom", value: admin.nom },
                    { label: "Prénom", value: admin.prenom },
                    { label: "Email", value: admin.email },
                    { label: "Téléphone", value: admin.telephone },
                    { label: "Salaire", value: `${admin.salaire} TND` },
                    { label: "Rôle", value: admin.role },
                    { label: "Date de création", value: new Date(admin.dateCreation).toLocaleDateString() },
                    { label: "Actif", value: admin.actif ? "Oui" : "Non" }
                ].map((item, index) => (
                    <div key={index} className="flex items-center">
                        {/* Label encore plus large */}
                        <p className="font-semibold text-gray-700 w-60">{item.label} :</p>

                        {/* Boîte contenant la valeur */}
                        <div className="flex-grow relative">
                            <div className="bg-gray-100 p-3 rounded-lg shadow-sm text-gray-700 h-12 flex items-center truncate w-full min-w-[200px] md:min-w-[325px] lg:min-w-[425px]">
                                {item.value || "—"} {/* Si vide, affiche un tiret */}
                            </div>
                            {/* Icône de modification collée à droite du box */}
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
