
const todoInput = document.getElementById('todoInput');
const btnAdd = document.getElementById('btnAdd');
const todoList = document.getElementById('todoList');
let tasks = JSON.parse(localStorage.getItem('taskflow_db')) || [];

function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        if (task.completed) li.classList.add('completed');

        li.innerHTML = `
            <div class="todo-content">
                <label class="checkbox-container">
                    <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? 'checked' : ''}>
                    <span class="checkmark"></span>
                </label>
                <span class="todo-text">${task.text}</span>
                <span class="todo-date">
                    <i class="fa-regular fa-calendar-check"></i> ${task.date}
                </span>
            </div>
            <div class="actions">
                <button class="btn-icon btn-edit" onclick="updateTask(${index})" title="Editar">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn-icon btn-delete" onclick="deleteTask(${index})" title="Apagar">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

function createTask() {
    const text = todoInput.value.trim();

    if (text === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A tarefa não pode estar vazia!',
            confirmButtonColor: '#6366f1'
        });
        return;
    }

    const now = new Date();
    const formattedDate = now.toLocaleString('pt-PT');

    const newTask = {
        text: text,
        date: formattedDate
    };

    tasks.push(newTask);
    saveAndRefresh();
    todoInput.value = '';

  
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Tarefa criada!',
        showConfirmButton: false,
        timer: 2000
    });
}


async function updateTask(index) {
    const { value: editedText } = await Swal.fire({
        title: 'Editar Tarefa',
        input: 'text',
        inputValue: tasks[index].text,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#6366f1',
        inputValidator: (value) => {
            if (!value) return 'Precisa de escrever algo!';
        }
    });

    if (editedText) {
        tasks[index].text = editedText;
        saveAndRefresh();

        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'info',
            title: 'Tarefa atualizada!',
            showConfirmButton: false,
            timer: 2000
        });
    }
}

function deleteTask(index) {
    Swal.fire({
        title: 'Tem a certeza?',
        text: "Não poderá recuperar esta tarefa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Sim, apagar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            tasks.splice(index, 1);
            saveAndRefresh();

            Swal.fire({
                title: 'Eliminado!',
                text: 'A tarefa foi removida com sucesso.',
                icon: 'success',
                confirmButtonColor: '#6366f1'
            });
        }
    });
}

function saveAndRefresh() {
    localStorage.setItem('taskflow_db', JSON.stringify(tasks));
    renderTasks();
}

btnAdd.addEventListener('click', createTask);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') createTask();
});

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveAndRefresh();

        Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: tasks[index].completed ? 'Tarefa completada!' : 'Tarefa marcada como incompleta!',
        showConfirmButton: false,
        timer: 2000
    });
}


document.addEventListener('DOMContentLoaded', renderTasks);
