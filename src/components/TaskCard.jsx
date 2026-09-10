function TaskCard({ task, onToggleTask, onRemoveTask }) {

  return (
    <div className="task-card">

      <h3>{task.name}</h3>

      <p>
        <strong>Data:</strong> {task.date}
      </p>

      <p>
        <strong>Descrição:</strong> {task.description}
      </p>

      <p>
        <strong>Prioridade:</strong> {task.priority}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {task.completed ? "Concluída" : "Pendente"}
      </p>

      {/* Callback para alterar o status da tarefa */}
      <button onClick={() => onToggleTask(task.id)}>
        {task.completed ? "Marcar como pendente" : "Concluir"}
      </button>

      {/* Callback para remover a tarefa */}
      <button onClick={() => onRemoveTask(task.id)}>
        Remover
      </button>

    </div>
  );
}

export default TaskCard;