"use client"

import React, { useState, useEffect, useCallback } from "react"
import { ChevronDown, ChevronUp, Clock, CheckCircle, AlertCircle } from "lucide-react"

const statusIcons = {
    A_FAIRE: Clock,
    EN_COURS: AlertCircle,
    TERMINEE: CheckCircle,
}

const priorityColors = {
    BASSE: "bg-green-100 text-green-800 border-green-300",
    MOYENNE: "bg-yellow-100 text-yellow-800 border-yellow-300",
    HAUTE: "bg-red-100 text-red-800 border-red-300",
}

const statusColors = {
    A_FAIRE: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    EN_COURS: "bg-blue-200 text-blue-800 hover:bg-blue-300",
    TERMINEE: "bg-green-200 text-green-800 hover:bg-green-300",
}

export const EmployeeTache = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            titre: "Réunion équipe",
            description: "Réunion pour discuter des prochaines étapes.",
            dateEcheance: "2025-02-28T12:00:00",
            statut: "A_FAIRE",
            priorite: "HAUTE",
        },
        {
            id: 2,
            titre: "Préparation présentation",
            description: "Préparer une présentation pour le projet.",
            dateEcheance: "2025-03-05T09:00:00",
            statut: "EN_COURS",
            priorite: "MOYENNE",
        },
        {
            id: 3,
            titre: "Finalisation rapport",
            description: "Finaliser le rapport avant la date limite.",
            dateEcheance: "2025-02-25T17:00:00",
            statut: "TERMINEE",
            priorite: "BASSE",
        },
    ])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [expandedTaskId, setExpandedTaskId] = useState(null)
    const [sortCriteria, setSortCriteria] = useState("dateEcheance")
    const [sortOrder, setSortOrder] = useState("asc")
    const [filterPriorite, setFilterPriorite] = useState("")
    const [filterStatut, setFilterStatut] = useState("")
    const [showPrioriteFilter, setShowPrioriteFilter] = useState(false)
    const [showStatutFilter, setShowStatutFilter] = useState(false)

    const fetchTasks = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            // Simuler la récupération des tâches
            // const response = await axios.get("/api/taches/employee");
            // setTasks(response.data);
        } catch (err) {
            console.error("Erreur lors du chargement des tâches:", err)
            setError("Erreur lors du chargement des tâches.")
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    const updateTaskStatus = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === taskId) {
                    const statusOrder = ["A_FAIRE", "EN_COURS", "TERMINEE"]
                    const currentIndex = statusOrder.indexOf(task.statut)
                    const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length]
                    return { ...task, statut: nextStatus }
                }
                return task
            }),
        )
    }

    const toggleTaskExpansion = (taskId) => {
        setExpandedTaskId(expandedTaskId === taskId ? null : taskId)
    }

    const formatDate = (dateString) => {
        if (!dateString) return "Non définie"
        const date = new Date(dateString)
        return new Intl.DateTimeFormat("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(date)
    }

    const handleSortChange = (criteria) => {
        if (criteria === sortCriteria) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        } else {
            setSortCriteria(criteria)
            setSortOrder("asc")
        }
        setShowPrioriteFilter(criteria === "priorite")
        setShowStatutFilter(criteria === "statut")
    }

    const filteredAndSortedTasks = tasks
        .filter(
            (task) =>
                (!filterPriorite || task.priorite === filterPriorite) && (!filterStatut || task.statut === filterStatut),
        )
        .sort((a, b) => {
            if (sortCriteria === "dateEcheance") {
                return sortOrder === "asc"
                    ? new Date(a.dateEcheance) - new Date(b.dateEcheance)
                    : new Date(b.dateEcheance) - new Date(a.dateEcheance)
            } else if (sortCriteria === "priorite") {
                const priorityOrder = { HAUTE: 3, MOYENNE: 2, BASSE: 1 }
                return sortOrder === "asc"
                    ? priorityOrder[a.priorite] - priorityOrder[b.priorite]
                    : priorityOrder[b.priorite] - priorityOrder[a.priorite]
            } else if (sortCriteria === "statut") {
                const statusOrder = { A_FAIRE: 1, EN_COURS: 2, TERMINEE: 3 }
                return sortOrder === "asc"
                    ? statusOrder[a.statut] - statusOrder[b.statut]
                    : statusOrder[b.statut] - statusOrder[a.statut]
            }
            return 0
        })

    if (loading) return <div className="text-center py-10">Chargement...</div>
    if (error) return <div className="text-center py-10 text-red-600">Erreur : {error}</div>

    return (
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 mb-14">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestion des Tâches</h1>
            <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="sortCriteria" className="font-medium text-gray-700">
                        Trier par:
                    </label>
                    <select
                        id="sortCriteria"
                        value={sortCriteria}
                        onChange={(e) => handleSortChange(e.target.value)}
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="dateEcheance">Date d'échéance</option>
                        <option value="priorite">Priorité</option>
                        <option value="statut">Statut</option>
                    </select>
                    <button
                        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                        className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200"
                        aria-label={sortOrder === "asc" ? "Trier par ordre décroissant" : "Trier par ordre croissant"}
                    >
                        {sortOrder === "asc" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {sortCriteria === "dateEcheance" && (
                        <span className="text-sm text-gray-600">({sortOrder === "asc" ? "Plus proche" : "Plus éloignée"})</span>
                    )}
                </div>
                {showPrioriteFilter && (
                    <div className="flex items-center gap-2">
                        <label htmlFor="filterPriorite" className="font-medium text-gray-700">
                            Priorité:
                        </label>
                        <select
                            id="filterPriorite"
                            value={filterPriorite}
                            onChange={(e) => setFilterPriorite(e.target.value)}
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                            <option value="">Toutes</option>
                            <option value="BASSE">Basse</option>
                            <option value="MOYENNE">Moyenne</option>
                            <option value="HAUTE">Haute</option>
                        </select>
                    </div>
                )}
                {showStatutFilter && (
                    <div className="flex items-center gap-2">
                        <label htmlFor="filterStatut" className="font-medium text-gray-700">
                            Statut:
                        </label>
                        <select
                            id="filterStatut"
                            value={filterStatut}
                            onChange={(e) => setFilterStatut(e.target.value)}
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                            <option value="">Tous</option>
                            <option value="A_FAIRE">À faire</option>
                            <option value="EN_COURS">En cours</option>
                            <option value="TERMINEE">Terminée</option>
                        </select>
                    </div>
                )}
            </div>

            {filteredAndSortedTasks.map((task) => (
                <div
                    key={task.id}
                    className={`task-item mb-4 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedTaskId === task.id ? "shadow-lg" : "shadow"
                    }`}
                >
                    <div
                        className={`p-4 cursor-pointer ${statusColors[task.statut]}`}
                        onClick={() => toggleTaskExpansion(task.id)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">{task.titre}</h3>
                            <span className={`${priorityColors[task.priorite]} px-3 py-1 rounded-full text-sm font-bold border-2`}>
                Priorité: {task.priorite.toLowerCase()}
              </span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                            <span>Échéance: {formatDate(task.dateEcheance)}</span>
                            <span className="flex items-center gap-1">
                {React.createElement(statusIcons[task.statut], { size: 16 })}
                                {task.statut.replace("_", " ").toLowerCase()}
              </span>
                        </div>
                    </div>
                    {expandedTaskId === task.id && (
                        <div className="p-4 bg-white border-t border-gray-200">
                            <p className="text-gray-700 mb-4">{task.description}</p>
                            <div className="flex justify-center">
                                <button
                                    className={`px-4 py-2 rounded-full font-medium text-sm cursor-pointer transition-all duration-200 ${
                                        statusColors[task.statut]
                                    }`}
                                    onClick={() => updateTaskStatus(task.id)}
                                >
                                    Changer le statut : {task.statut.replace("_", " ").toLowerCase()}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

