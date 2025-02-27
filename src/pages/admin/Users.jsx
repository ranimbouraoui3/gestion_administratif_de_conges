import { useEffect, useState } from "react";
import axios from "axios";

export const Users = () => {
    const [employes, setEmployes] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [filteredEmployes, setFilteredEmployes] = useState([]);
    const [showModal, setShowModal] = useState(false); // State to control the modal visibility
    const [newEmploye, setNewEmploye] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        salaire: "",
        role: "",
        departement: "",
        sexe: "",
        actif: true,
        handicap: false,
    });



    useEffect(() => {
        const fetchEmployes = async () => {
            try {
                const response = await axios.get("/api/employes");
                setEmployes(response.data);
                setFilteredEmployes(response.data);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };
        fetchEmployes();
    }, []);

    useEffect(() => {
        let filtered = employes.filter((employe) => {
            const employeValues = Object.values(employe)
                .map((val) => (typeof val === "object" ? JSON.stringify(val) : val))
                .join(" ")
                .toLowerCase();

            return employeValues.includes(search.toLowerCase());
        });

        if (filter) {
            filtered = filtered.filter((employe) => employe.role === filter);
        }

        setFilteredEmployes(filtered);
    }, [search, filter, employes]);

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setNewEmploye({});  // Réinitialiser les valeurs du formulaire si nécessaire
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmploye((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/employes", newEmploye);
            setEmployes([...employes, newEmploye]);
            setShowModal(false); // Close the modal after adding
        } catch (error) {
            console.error("Error adding employee:", error);
        }
    };

    return (
        <div className="p-4">
            {/* Search and Add Button */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <svg
                        className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.5 3a5.5 5.5 0 1 1-3.873 9.373l-3.223 3.223a.75.75 0 1 1-1.06-1.06l3.223-3.224A5.5 5.5 0 0 1 8.5 3Zm0 1.5a4 4 0 1 0 2.829 6.829 4 4 0 0 0-2.83-6.83Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="bg-gray-100 border p-2 rounded-md w-60"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        className="border p-2 rounded-md"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">Tous les rôles</option>
                        <option value="Manager">Manager</option>
                        <option value="Développeur">Développeur</option>
                        <option value="RH">RH</option>
                    </select>
                </div>

                <button
                    onClick={handleModalOpen}
                    className="text-center text-white text-base font-medium bg-blue-700 w-56 px-5 py-2.5 rounded-lg hover:bg-blue-100 hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-blue-700"
                >
                    + Ajouter Employé
                </button>
            </div>

            {/* Modal for Adding Employee */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-12 mt-10 mb-14 relative">
                        {/* Bouton "X" pour fermer la modale */}
                        <button
                            onClick={handleModalClose}
                            className="absolute top-4 right-4 p-2 bg-transparent rounded-full text-gray-500 hover:bg-gray-200 hover:text-red-600 transition-colors duration-300"
                            style={{ zIndex: 60 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <h2 className="text-2xl font-bold text-center mb-6">Ajouter Employé</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* First row: Nom and Prénom */}
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Nom</label>
                                    <input
                                        className="w-full p-2 border rounded-md"
                                        type="text"
                                        name="nom"
                                        value={newEmploye.nom}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Prénom</label>
                                    <input
                                        className="w-full p-2 border rounded-md"
                                        type="text"
                                        name="prenom"
                                        value={newEmploye.prenom}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Second row: Email and Téléphone */}
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Email</label>
                                    <input
                                        className="w-full p-2 border rounded-md"
                                        type="email"
                                        name="email"
                                        value={newEmploye.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Téléphone</label>
                                    <input
                                        className="w-full p-2 border rounded-md"
                                        type="tel"
                                        name="telephone"
                                        value={newEmploye.telephone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Third row: Salaire and Jours de congé */}
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Salaire</label>
                                    <input
                                        className="w-full p-2 border rounded-md"
                                        type="number"
                                        name="salaire"
                                        value={newEmploye.salaire}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Jours de congé disponibles</label>
                                    <input
                                        className="w-full p-2 border rounded-md"
                                        type="number"
                                        name="jours_conges_disponibles"
                                        value={newEmploye.jours_conges_disponibles}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Fourth row: Date d'embauche and Département */}
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Date d'embauche</label>
                                    <input
                                        className="w-full p-2 border rounded-md"
                                        type="date"
                                        name="date_embauche"
                                        value={newEmploye.date_embauche}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Département</label>
                                    <input
                                        className="w-full p-2 border rounded-md"
                                        type="text"
                                        name="departement"
                                        value={newEmploye.departement}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Fifth row: Sexe and Actif */}
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Sexe</label>
                                    <select
                                        name="sexe"
                                        className="w-full p-2 border rounded-md"
                                        value={newEmploye.sexe}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Homme">Homme</option>
                                        <option value="Femme">Femme</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Actif</label>
                                    <input
                                        type="checkbox"
                                        name="actif"
                                        className="mr-2"
                                        checked={newEmploye.actif}
                                        onChange={(e) => setNewEmploye({ ...newEmploye, actif: e.target.checked })}
                                    />
                                </div>
                            </div>

                            {/* Sixth row: Handicap */}
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <label className="block text-sm font-semibold">Handicap</label>
                                    <input
                                        type="checkbox"
                                        name="handicap"
                                        className="mr-2"
                                        checked={newEmploye.handicap}
                                        onChange={(e) => setNewEmploye({ ...newEmploye, handicap: e.target.checked })}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-700 text-white px-6 py-2 rounded-lg"
                                >
                                    Ajouter
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            )}

            {/* Employee Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b">Nom</th>
                        <th className="py-2 px-4 border-b">Prénom</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Téléphone</th>
                        <th className="py-2 px-4 border-b">Salaire</th>
                        <th className="py-2 px-4 border-b">Jours Congés</th>
                        <th className="py-2 px-4 border-b">Date Embauche</th>
                        <th className="py-2 px-4 border-b">Rôle</th>
                        <th className="py-2 px-4 border-b">Département</th>
                        <th className="py-2 px-4 border-b">Sexe</th>
                        <th className="py-2 px-4 border-b">Actif</th>
                        <th className="py-2 px-4 border-b">Handicap</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredEmployes.map((employe) => {
                        const formattedDate = new Date(employe.date_embauche).toLocaleDateString();
                        return (
                            <tr key={employe.id}>
                                <td className="py-2 px-4 border-b">{employe.nom}</td>
                                <td className="py-2 px-4 border-b">{employe.prenom}</td>
                                <td className="py-2 px-4 border-b">{employe.email}</td>
                                <td className="py-2 px-4 border-b">{employe.telephone}</td>
                                <td className="py-2 px-4 border-b">{employe.salaire}</td>
                                <td className="py-2 px-4 border-b">{employe.jours_conges_disponibles}</td>
                                <td className="py-2 px-4 border-b">{formattedDate}</td>
                                <td className="py-2 px-4 border-b">{employe.role}</td>
                                <td className="py-2 px-4 border-b">{employe.departement ? employe.departement.nom : "N/A"}</td>
                                <td className="py-2 px-4 border-b">{employe.sexe}</td>
                                <td className="py-2 px-4 border-b">{employe.actif ? "Oui" : "Non"}</td>
                                <td className="py-2 px-4 border-b">{employe.handicap ? "Oui" : "Non"}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
