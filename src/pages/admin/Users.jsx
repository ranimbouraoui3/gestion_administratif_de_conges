import { useEffect, useState } from 'react';
import axios from 'axios';

export const Users = () => {
    const [employes, setEmployes] = useState([]);

    useEffect(() => {
        const fetchEmployes = async () => {
            try {
                const response = await axios.get('/api/employes');
                setEmployes(response.data);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };
        fetchEmployes();
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead>
                <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Nom</th>
                    <th className="py-2 px-4 border-b">Prénom</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Téléphone</th>
                    <th className="py-2 px-4 border-b">Salaire</th>
                    <th className="py-2 px-4 border-b">Jours Congés Disponibles</th>
                    <th className="py-2 px-4 border-b">Date Embauche</th>
                    <th className="py-2 px-4 border-b">Rôle</th>
                    <th className="py-2 px-4 border-b">Département</th>
                    <th className="py-2 px-4 border-b">Sexe</th>
                    <th className="py-2 px-4 border-b">Actif</th>
                    <th className="py-2 px-4 border-b">Handicap</th>
                </tr>
                </thead>
                <tbody>
                {employes.map((employe) => {
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
                            <td className="py-2 px-4 border-b">{employe.departement ? employe.departement.nom : 'N/A'}</td>
                            <td className="py-2 px-4 border-b">{employe.sexe}</td>
                            <td className="py-2 px-4 border-b">{employe.actif ? 'Oui' : 'Non'}</td>
                            <td className="py-2 px-4 border-b">{employe.handicap ? 'Oui' : 'Non'}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};
