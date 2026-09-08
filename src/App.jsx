import { useState } from 'react'
import TaskForm from './components/TaskForm'

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

  return (
    <div className="app">
      <header>
        <h1>Gerenciador de Tarefas</h1>
      </header>

      <main>
        <TaskForm onAddTask={handleAddTask} />

        {/* Espaço reservado para o componente de listagem
            (integrante responsável por TaskList / TaskCard) */}
        {/* <TaskList tasks={tasks} /> */}

        {/* Espaço reservado para os filtros
            (Todas / Pendentes / Concluídas) */}
        {/* <Filters /> */}
      
      </main>
    </div>
  )
}

export default App