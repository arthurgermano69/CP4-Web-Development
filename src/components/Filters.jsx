import { useState, useMemo } from "react";

export default function FiltroTarefas({ tarefas }) {
  const [filtroStatus, setFiltroStatus] = useState("todas");
  const [busca, setBusca] = useState("");

  const tarefasFiltradas = useMemo(() => {
    return tarefas.filter((tarefa) => {
      const bateStatus =
        filtroStatus === "todas" ||
        (filtroStatus === "concluida" && tarefa.completed) ||
        (filtroStatus === "pendente" && !tarefa.completed);

      const bateBusca = tarefa.name
        .toLowerCase()
        .includes(busca.toLowerCase());

      return bateStatus && bateBusca;
    });
  }, [tarefas, filtroStatus, busca]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar tarefa..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <select
        value={filtroStatus}
        onChange={(e) => setFiltroStatus(e.target.value)}
      >
        <option value="todas">Todas</option>
        <option value="pendente">Pendentes</option>
        <option value="concluida">Concluídas</option>
      </select>

      <ul>
        {tarefasFiltradas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.name} — <strong>{tarefa.priority}</strong>{" "}
            {tarefa.completed ? "✅" : "⏳"}
          </li>
        ))}
      </ul>
    </div>
  );
}