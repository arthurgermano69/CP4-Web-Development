import { useState } from 'react'

// Componente responsável por capturar os dados de uma nova tarefa
// e enviá-los para o componente pai através do callback onAddTask.

const TaskForm = ({ onAddTask }) => {
    
    // Estado local do formulário: cada campo pedido no enunciado
    // (Nome, Data, Descrição, Nível de Prioridade)
    
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('media')

    // Função chamada ao enviar o formulário
    
    const handleSubmit = (event) => {
        event.preventDefault() // evita o reload padrão do form

        // Validação simples: não deixa cadastrar tarefa sem nome
        
        if (!name.trim()) return

        // Monta o objeto da tarefa que será enviado pro componente pai.
        // Cada tarefa recebe um id único baseado no timestamp e
        // já nasce como "não concluída".
        
        const newTask = {
            id: Date.now(),
            name,
            date,
            description,
            priority,
            completed: false,
        }

        // Callback: quem decide o que fazer com a tarefa (salvar no
        // estado global / localStorage) é o componente pai, não este form.
        
        onAddTask(newTask)

        // Limpa o formulário depois de cadastrar
        
        setName('')
        setDate('')
        setDescription('')
        setPriority('media')
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>Nova tarefa</h2>

            <div className="form-field">
                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Estudar para a prova"
                    required
                />
            </div>

            <div className="form-field">
                <label htmlFor="date">Data</label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className="form-field">
                <label htmlFor="description">Descrição</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detalhes da tarefa"
                    rows={3}
                />
            </div>

            <div className="form-field">
                <label htmlFor="priority">Prioridade</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
                </select>
            </div>

            <button type="submit">Adicionar tarefa</button>
        </form>
    )
}

export default TaskForm