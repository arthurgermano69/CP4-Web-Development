// Placeholder para o hook customizado de persistência.
// Fica marcado aqui para o integrante responsável pelo localStorage
// saber onde continuar (ver divisão de tarefas do grupo).

// Ideia geral do que vai entrar aqui:
// - Ler o valor salvo no localStorage ao iniciar
// - Sincronizar automaticamente sempre que o estado mudar (useEffect)
// - Expor a mesma API do useState: [value, setValue]

import { useState, useEffect } from 'react'

// Hook customizado que funciona como o useState, mas persiste o valor
// no localStorage. Retorna [value, setValue], igual ao useState.
function useLocalStorage(key, initialValue) {

  // O initializer function do useState só roda uma vez, na primeira
  // renderização, então é o lugar certo para ler do localStorage
  // sem fazer essa leitura toda vez que o componente renderiza.
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch (error) {
      console.error(`Erro ao ler "${key}" do localStorage:`, error)
      return initialValue
    }
  })

  // Sempre que o valor mudar, salva de volta no localStorage.
  // Incluir "key" nas dependências evita bugs se a chave mudar.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Erro ao salvar "${key}" no localStorage:`, error)
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage