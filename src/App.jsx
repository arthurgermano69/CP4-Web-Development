import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

// Os outros integrantes vão importar aqui os próprios componentes:
// import TaskList from './components/TaskList'
// import Filters from './components/Filters'
// import useLocalStorage from './hooks/useLocalStorage'

const App = () => {
  
  // Estado central da lista de tarefas.
  // Depois, o integrante responsável pelo localStorage vai trocar
  // este useState por um hook customizado (ex: useLocalStorage),
  // mantendo a mesma interface (tasks / setTasks).
  
  const [tasks, setTasks] = useState([])

  // Callback passado para o TaskForm: adiciona uma nova tarefa
  // ao final da lista, sem remover as que já existem.
  
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  // Marca a tarefa como concluída ou pendente
  const handleToggleTask = (id) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  )
}

// Remove a tarefa da lista
const handleRemoveTask = (id) => {
  setTasks((prevTasks) =>
    prevTasks.filter((task) => task.id !== id)
  )
}

  return (
    <div className="app">
      <header>
        <h1>Gerenciador de Tarefas</h1>
      </header>

      <main>
        <TaskForm onAddTask={handleAddTask} />

        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onRemoveTask={handleRemoveTask}
        />

        {/* Espaço reservado para os filtros
            (Todas / Pendentes / Concluídas) */}
        {/* <Filters /> */}
      
      </main>
    </div>
  )
}

export default App