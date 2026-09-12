import { useState } from 'react'

const TaskForm = ({ onAddTask }) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('media')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name.trim()) return

        const newTask = {
            id: Date.now(),
            name,
            date,
            description,
            priority,
            completed: false,
        }

        onAddTask(newTask)

        setName('')
        setDate('')
        setDescription('')
        setPriority('media')
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-4">
            <h2 className="text-base font-semibold text-gray-900">Nova tarefa</h2>

            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nome</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Estudar para a prova"
                    required
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="date" className="text-sm font-semibold text-gray-700">Data</label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="description" className="text-sm font-semibold text-gray-700">Descrição</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detalhes da tarefa"
                    rows={3}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="priority" className="text-sm font-semibold text-gray-700">Prioridade</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
                </select>
            </div>

            <button
                type="submit"
                className="self-start bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-md"
            >
                Adicionar tarefa
            </button>
        </form>
    )
}

export default TaskForm