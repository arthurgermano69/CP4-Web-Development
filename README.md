CP4 Web Development

Aplicação web para gerenciar tarefas do dia a dia, construída em React + Vite. Permite cadastrar tarefas com nome, data, descrição e prioridade, marcá-las como concluídas, removê-las e filtrá-las por status ou busca por texto — tudo salvo automaticamente no localStorage do navegador.

Funcionalidades
✅ Adicionar tarefas com nome, data, descrição e prioridade (baixa, média, alta)
✅ Marcar tarefas como concluídas / pendentes
✅ Remover tarefas
🔍 Buscar tarefas pelo nome
🗂️ Filtrar tarefas por status (todas, pendentes, concluídas)
📊 Painel com totais de tarefas (total, pendentes, concluídas)
💾 Persistência automática dos dados no localStorage, sem precisar de backend
Tecnologias utilizadas
React 19
Vite
Tailwind CSS 4
ESLint
Estrutura do projeto
src/
├── components/
│   ├── Filters.jsx     # Busca e filtro de tarefas por status
│   ├── TaskCard.jsx    # Card individual de cada tarefa
│   ├── TaskForm.jsx    # Formulário de criação de tarefas
│   └── TaskList.jsx    # Lista de tarefas cadastradas
├── hooks/
│   └── useLocalStorage.js  # Hook para persistir estado no localStorage
├── App.jsx             # Componente principal
├── main.jsx            # Ponto de entrada da aplicação
└── index.css           # Estilos globais / Tailwind
Como rodar o projeto

Pré-requisitos: Node.js instalado (recomenda-se a versão 18 ou superior).

bash
# Clone o repositório
git clone https://github.com/arthurgermano69/CP4-Web-Development.git

# Entre na pasta do projeto
cd CP4-Web-Development

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

Depois disso, abra o endereço exibido no terminal (geralmente http://localhost:5173) no navegador.

Desenvolvido por: 

Arthur Germano Pinheiro (rm574042) 
Artur de Novazzi Maia (rm572624)
Bruno Araujo Castro (rm572723)
João Pedro De Souza (rm571437)
