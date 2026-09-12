const priorityStyles = {
    alta: { border: 'border-l-red-600', pill: 'bg-red-100 text-red-700' },
    media: { border: 'border-l-amber-600', pill: 'bg-amber-100 text-amber-700' },
    baixa: { border: 'border-l-green-600', pill: 'bg-green-100 text-green-700' },
}

function TaskCard({ task, onToggleTask, onRemoveTask }) {
    const priority = priorityStyles[task.priority] ?? priorityStyles.media

    return (
        <div className={`bg-white border border-gray-200 border-l-4 ${priority.border} rounded-lg p-4`}>
            <h3 className="text-base font-semibold text-gray-900">{task.name}</h3>

            <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold text-gray-800">Data:</span> {task.date || 'Sem data'}
            </p>

            <p className="text-sm text-gray-600 mt-1">
                <span className="font-semibold text-gray-800">Descrição:</span> {task.description || 'Sem descrição'}
            </p>

            <div className="flex items-center gap-2 mt-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priority.pill}`}>
                    {task.priority}
                </span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${task.completed ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                    {task.completed ? 'Concluída' : 'Pendente'}
                </span>
            </div>

            <div className="flex gap-2 mt-4">
                <button
                    onClick={() => onToggleTask(task.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-3 py-1.5 rounded-md"
                >
                    {task.completed ? 'Marcar como pendente' : 'Concluir'}
                </button>

                <button
                    onClick={() => onRemoveTask(task.id)}
                    className="bg-white border border-red-600 text-red-600 hover:bg-red-50 text-sm font-semibold px-3 py-1.5 rounded-md"
                >
                    Remover
                </button>
            </div>
        </div>
    )
}

export default TaskCard