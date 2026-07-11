function updateStatistics() {
    const taskList = document.getElementById('task-list');
    const totalTasks = taskList.children.length;
    let activeTasks = 0;
    let completedTasks = 0;
    for (const task of taskList.children) {
        if (taskList.children.querySelector('input[type="checkbox"]').checked) {
            completedTasks++;
        } else {
            activeTasks++;
        }
    }
    document.getElementById('total-tasks').textContent = totalTasks;
    document.getElementById('active-tasks').textContent = activeTasks;
    document.getElementById('completed-tasks').textContent = totalTasks - activeTasks;
}

function createTaskItem(text) {
    const taskListItem = document.createElement('li');
    taskListItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add("text-checkbox", "form-check-input", "me-2");
    const taskText = document.createElement('span');
    taskText.textContent = text;
    taskText.classList.add("task-text");
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add("delete-btn", "btn", "btn-danger", "btn-sm");
    taskListItem.append("checkBox", "taskText", "deleteButton");
    return taskListItem;
}

function handleAddTask(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTaskItem = createTaskItem(taskText);
        taskList.appendChild(newTaskItem);
        taskInput.value = '';
        taskInput.focus();
        updateStatistics();
    }
}

function handleTaskClick(event) {
    const target = event.target;
    if (target.classList.contains('delete-btn')) {
        target.parentElement.remove();
        updateStatistics();
    }
    const tasks = document.getElementById('task-list').children;
    for (const task of tasks) {
        if (target === task.querySelector('input[type="checkbox"]').checked) {
            target.classList.add("completed-task", "text-decoration-line-through");
        } else {
            target.classList.add("active-task", "text-decoration-none");
        }
        updateStatistics();
    }
}

function EnableTaskEdit(event) {
    const target = event.target;
    if (!target.classList.contains('task-text')) {
        return;
    } else {
        target.parentElement.contentEditable = true;
        target.parentElement.focus();
        target.execCommand('selectAll');
    }
}

function finishTaskEdit(event) {
    const target = event.target;
    if (target.parentElement.contentEditable === 'true') {
        event.preventDefault();
        target.parentElement.contentEditable = false;
        target.textContent = target.textContent.trim();
        if (target.textContent === '') {
            target.textContent = 'Untitled Task';
        }
    }
}

function handleEditKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        finishTaskEdit(event);
        event.target.blur();
    }
}

function handleSearch(event) {
    const searchTerm = event.target.value.trim().toLowerCase();
    const taskList = document.getElementById('task-list');
    const taskItems = taskList.querySelectorAll('li');
    for (const taskItem of taskItems) {
        const taskText = taskItem.querySelector('.task-text').textContent.toLowerCase();
        if (taskText.includes(searchTerm)) {
            taskItem.style.display = '';
        } else {
            taskItem.style.display = 'none';
        }
    }

    function showAllTasks() {
        const tasks = document.getElementById('task-list').children;
        for (const task of tasks) {
            task.style.display = '';
        }
    }

    function showActiveTasks() {
        const tasks = document.getElementById('task-list').children;
        for (const task of tasks) {
            if (task.querySelector('input[type="checkbox"]').checked) {
                task.style.display = 'none';
            } else {
                task.style.display = '';
            }
        }
    }

    function showCompletedTasks() {
        const tasks = document.getElementById('task-list').children;
        for (const task of tasks) {
            if (task.querySelector('input[type="checkbox"]').checked) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        }
    }

    function setupFormListener() { }
    function setupTaskListListener() { }
    function setupEditListeners() { }
    function setupSearchListener() { }
    function setupFilterButtons() { }
    function bootSystem() {
        setupFormListener();
        setupTaskListListener();
        setupEditListeners();
        setupSearchListener();
        setupFilterButtons();
    }

    document.addEventListener('DOMContentLoaded', bootSystem);