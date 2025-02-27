import { useState } from "react";
import axios from "axios";
import "./styles/employee.css";

export const EmployeeDemandeDocument = () => {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        cin: "",
        typeDocument: ""
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post("/api/demande-document", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                setMessage("Demande envoyée avec succès !");
                setMessageType("success");
                setFormData({
                    nom: "",
                    prenom: "",
                    email: "",
                    cin: "",
                    typeDocument: ""
                });
            } else {
                setMessage("Une erreur est survenue. Veuillez réessayer.");
                setMessageType("error");
            }
        } catch (error) {
            console.error("Error submitting demande:", error);
            setMessage("Une erreur est survenue. Veuillez réessayer.");
            setMessageType("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-12 mt-10 mb-14">
            <h2 className="text-2xl font-bold text-center mb-6">Demande de Document Administratif</h2>
            {message && (
                <p className={`text-center mb-4 ${messageType === "success" ? "text-green-500" : "text-red-500"}`}>
                    {message}
                </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-semibold text-gray-700">Nom</label>
                        <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            className="bg-gray-100 mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700">Prénom</label>
                        <input
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            className="bg-gray-100 mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-100 mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700">CIN</label>
                        <input
                            type="text"
                            name="cin"
                            value={formData.cin}
                            onChange={handleChange}
                            className="bg-gray-100 mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block font-semibold text-gray-700">Type de document</label>
                    <select
                        name="typeDocument"
                        value={formData.typeDocument}
                        onChange={handleChange}
                        className="bg-gray-100 mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
                        required
                    >
                        <option value="">Sélectionner un document</option>
                        <option value="ATTESTATION_TRAVAIL">Attestation de travail</option>
                        <option value="FICHE_PAIE">Fiche de paie</option>
                    </select>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="text-center text-white text-base font-medium bg-blue-700 max-w-56 px-5 py-2.5 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        disabled={loading}
                    >
                        {loading ? "Envoi en cours..." : "Soumettre la demande"}
                    </button>
                </div>
            </form>
        </div>
    );
};
