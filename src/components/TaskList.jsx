import TaskCard from "./TaskCard";

function TaskList({ tasks, onToggleTask, onRemoveTask }) {

  return (
    <section>

      <h2>Lista de Tarefas</h2>

      {tasks.length === 0 ? (

        <p>Nenhuma tarefa cadastrada.</p>

      ) : (

        // O map percorre o array de tarefas
        // e cria um TaskCard para cada tarefa.
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onRemoveTask={onRemoveTask}
          />
        ))

      )}

    </section>
  );
}

export default TaskList;