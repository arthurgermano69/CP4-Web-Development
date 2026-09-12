import TaskCard from "./TaskCard"

function TaskList({ tasks, onToggleTask, onRemoveTask }) {
    return (
        <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Lista de Tarefas</h2>

            {tasks.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-10 border border-dashed border-gray-200 rounded-lg">
                    Nenhuma tarefa cadastrada.
                </p>
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