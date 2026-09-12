# Tarefas

Aplicação web para gerenciar tarefas do dia a dia, construída em **React + Vite**. Permite cadastrar tarefas com nome, data, descrição e prioridade, marcá-las como concluídas, removê-las e filtrá-las por status ou busca por texto — tudo salvo automaticamente no `localStorage` do navegador.

## Funcionalidades

- ✅ Adicionar tarefas com nome, data, descrição e prioridade (baixa, média, alta)
- ✅ Marcar tarefas como concluídas / pendentes
- ✅ Remover tarefas
- 🔍 Buscar tarefas pelo nome
- 🗂️ Filtrar tarefas por status (todas, pendentes, concluídas)
- 📊 Painel com totais de tarefas (total, pendentes, concluídas)
- 💾 Persistência automática dos dados no `localStorage`, sem precisar de backend

## Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Estrutura do projeto

```
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
```

## Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) instalado (recomenda-se a versão 18 ou superior).

```bash
# Clone o repositório
git clone https://github.com/arthurgermano69/CP4-Web-Development.git

# Entre na pasta do projeto
cd CP4-Web-Development

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Depois disso, abra o endereço exibido no terminal (geralmente `http://localhost:5173`) no navegador.

### Outros scripts disponíveis

| Comando           | Descrição                                      |
| ----------------- | ----------------------------------------------- |
| `npm run dev`      | Inicia o servidor de desenvolvimento            |
| `npm run build`    | Gera a versão de produção do projeto            |
| `npm run preview`  | Pré-visualiza a build de produção localmente    |
| `npm run lint`     | Executa o ESLint para checar problemas no código |

## Autor

Desenvolvido por [Arthur Germano](https://github.com/arthurgermano69) como projeto acadêmico da disciplina de Web Development.
