# Projeto Final — ToDo List

## Nome do Website
TaskFlow

---


# Requisitos do Projeto

## 1. Single Page Website
- A aplicação deve ser **Single Page Application (SPA)**.
- Sem navegação entre páginas.
- Tudo deve acontecer numa única interface.

---

## 2. Operações CRUD (Obrigatórias)

### Create (POST)
- Criar novas tarefas (Todos).
- Formulário para adicionar tarefas.
- Validar campos antes de guardar.

### Read (GET)
- Ler e mostrar todas as tarefas criadas.

### Update (PUT)
- Editar tarefas existentes.
- Permitir alterar:
  - título
  - descrição (opcional)
  - estado (concluído / pendente)

### Delete (DELETE)
- Apagar tarefas individualmente.

---

## 3. Persistência com localStorage
Guardar dados no **localStorage**:
- Ao criar tarefas.
- Ao editar tarefas.
- Ao apagar tarefas.
- Carregar automaticamente tarefas guardadas quando a página abre.

---

## 4. Data e Hora (DateTime API)
Cada tarefa deve guardar:
- Data de criação
- Hora de criação

