import useLocalStorage from './hooks/useLocalStorage'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FiltroTarefas from './components/Filters'

const App = () => {
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    const handleToggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        )
    }

    const handleRemoveTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    }

    const total = tasks.length
    const concluidas = tasks.filter((task) => task.completed).length
    const pendentes = total - concluidas

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-6 py-4">
                    <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
                        CP4 Web Development
                    </span>
                </div>
            </nav>

            <header className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <h1 className="text-3xl font-bold text-gray-900">Gerenciador de Tarefas</h1>
                    <p className="text-gray-500 mt-2 max-w-md">
                        Organize suas tarefas por prioridade e acompanhe o que já foi concluído.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mt-8 max-w-md">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm hover:border-gray-300 transition-all duration-150">
                            <p className="text-2xl font-bold text-gray-900">{total}</p>
                            <p className="text-xs font-semibold text-gray-500 uppercase mt-1">Total</p>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 hover:shadow-sm hover:border-amber-300 transition-all duration-150">
                            <p className="text-2xl font-bold text-amber-600">{pendentes}</p>
                            <p className="text-xs font-semibold text-amber-700 uppercase mt-1">Pendentes</p>
                        </div>
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg px-4 py-3 hover:shadow-sm hover:border-indigo-300 transition-all duration-150">
                            <p className="text-2xl font-bold text-indigo-600">{concluidas}</p>
                            <p className="text-xs font-semibold text-indigo-700 uppercase mt-1">Concluídas</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-start">
                    <TaskForm onAddTask={handleAddTask} />

                    <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <FiltroTarefas tarefas={tasks} />
                        <div className="border-t border-gray-100 mt-6 pt-6">
                            <TaskList
                                tasks={tasks}
                                onToggleTask={handleToggleTask}
                                onRemoveTask={handleRemoveTask}
                            />
                        </div>
                    </section>
                </div>
            </main>

            <footer className="border-t border-gray-200 mt-10">
                <div className="max-w-5xl mx-auto px-6 py-6 text-xs text-gray-400">
                    Projeto acadêmico de Web Development.
                </div>
            </footer>
        </div>
    )
}

export default App