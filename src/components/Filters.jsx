import { useState, useMemo } from "react"

const priorityPill = {
    alta: 'bg-red-100 text-red-700',
    media: 'bg-amber-100 text-amber-700',
    baixa: 'bg-green-100 text-green-700',
}

export default function FiltroTarefas({ tarefas }) {
    const [filtroStatus, setFiltroStatus] = useState("todas")
    const [busca, setBusca] = useState("")

    const tarefasFiltradas = useMemo(() => {
        return tarefas.filter((tarefa) => {
            const bateStatus =
                filtroStatus === "todas" ||
                (filtroStatus === "concluida" && tarefa.completed) ||
                (filtroStatus === "pendente" && !tarefa.completed)

            const bateBusca = tarefa.name
                .toLowerCase()
                .includes(busca.toLowerCase())

            return bateStatus && bateBusca
        })
    }, [tarefas, filtroStatus, busca])

    return (
        <div>
            <div className="flex flex-wrap gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Buscar tarefa..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="flex-1 min-w-[160px] border border-gray-300 rounded-md px-3 py-2 text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-400"
                />

                <select
                    value={filtroStatus}
                    onChange={(e) => setFiltroStatus(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-400"
                >
                    <option value="todas">Todas</option>
                    <option value="pendente">Pendentes</option>
                    <option value="concluida">Concluídas</option>
                </select>
            </div>

            <ul className="flex flex-col">
                {tarefasFiltradas.map((tarefa) => (
                    <li
                        key={tarefa.id}
                        className="flex items-center gap-2 py-2 px-2 -mx-2 text-sm border-b border-gray-100 rounded-md hover:bg-gray-50 transition-colors duration-150"
                    >
                        <span className="flex-1 text-gray-800">{tarefa.name}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priorityPill[tarefa.priority] ?? priorityPill.media}`}>
                            {tarefa.priority}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tarefa.completed ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                            {tarefa.completed ? 'Concluída' : 'Pendente'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}