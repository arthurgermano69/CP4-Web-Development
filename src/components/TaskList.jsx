import TaskCard from "./TaskCard"

function TaskList({ tasks, onToggleTask, onRemoveTask }) {
    return (
        <section className="mt-8">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Lista de Tarefas</h2>

            {tasks.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-6">Nenhuma tarefa cadastrada.</p>
            ) : (
                <div className="flex flex-col gap-3">
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onToggleTask={onToggleTask}
                            onRemoveTask={onRemoveTask}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default TaskList