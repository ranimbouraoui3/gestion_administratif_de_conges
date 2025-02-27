import { useState } from "react";
import axios from "axios";
import "./styles/employee.css";
export const EmployeeDemandeConge = () => {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        typeConges: "",
        dateDebut: "",
        dateFin: "",
        commentaire: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // For success or error messages

    // Handle changes in form input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(""); // Reset the message before submitting

        try {
            const response = await axios.post("/api/demande-conge", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                setMessage("Demande de congé envoyée avec succès !");
                setMessageType("success");
                // Reset form fields after successful submission
                setFormData({
                    nom: "",
                    prenom: "",
                    email: "",
                    typeConges: "",
                    dateDebut: "",
                    dateFin: "",
                    commentaire: "",
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
            <div >
                <h2 className="text-2xl font-bold text-center mb-6">Demande de Congé</h2>

                {/* Message display */}
                {message && (
                    <p className={`text-center mb-4 ${messageType === "success" ? "text-green-500" : "text-red-500"}`}>
                        {message}
                    </p>
                )}

                {/* Form */}
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
                            <label className="block font-semibold text-gray-700">Type de congé</label>
                            <select
                                name="typeConges"
                                value={formData.typeConges}
                                onChange={handleChange}
                                className="bg-gray-100 mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Sélectionner un type de congé</option>
                                <option value="Congé annuel">Congé annuel</option>
                                <option value="Congé maladie">Congé maladie</option>
                                <option value="Congé maternité">Congé maternité</option>
                                <option value="Congé paternité">Congé paternité</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-semibold text-gray-700">Date de début</label>
                            <input
                                type="date"
                                name="dateDebut"
                                value={formData.dateDebut}
                                onChange={handleChange}
                                className="bg-gray-100 mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-gray-700">Date de fin</label>
                            <input
                                type="date"
                                name="dateFin"
                                value={formData.dateFin}
                                onChange={handleChange}
                                className="bg-gray-100 mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700">Commentaire (facultatif)</label>
                        <textarea
                            name="commentaire"
                            value={formData.commentaire}
                            onChange={handleChange}
                            className="bg-gray-100 mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        />
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
        </div>
    );
};
