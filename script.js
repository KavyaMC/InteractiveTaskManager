function updateStatistics() {
    const taskList = document.getElementById('task-list');
    const totalTasks = taskList.children.length;
    let completedTasks = 0;
    for (const task of taskList.children) {
        if (task.querySelector('input').checked) {
            completedTasks++;
        }
    }

    document.getElementById('total-count').textContent = totalTasks;
    document.getElementById('completed-count').textContent = completedTasks;
    document.getElementById('remaining-count').textContent = totalTasks - completedTasks;
    announce(`Task summary updated. ${totalTasks} total tasks, ${completedTasks} completed, ${totalTasks - completedTasks} remaining.`);
}

function createTaskItem(text) {
    const taskListItem = document.createElement('li');
    taskListItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add("text-checkbox", "form-check-input", "me-2");
    const taskText = document.createElement('span');
    taskText.textContent = text;
    taskText.classList.add('task-text', 'flex-grow-1', 'ms-2');
    taskText.tabIndex = 0;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add("delete-btn", "btn", "btn-danger", "btn-sm");
    taskListItem.append(checkBox, taskText, deleteButton);
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
        announce(`Task "${taskText}" added.`);
        updateStatistics();
    }
}

function handleAddClick(event) {
    const target = event.target;

    if (target.classList.contains('delete-btn')) {
        target.parentElement.remove();
        announce("Task Deleted");
        updateStatistics();
        return;
    }
    if (target.type === 'checkbox') {
        const taskText = target.parentElement.querySelector('.task-text');

        if (target.checked) {
            taskText.classList.add('text-decoration-line-through');
            announce("Task Completed");
        } else {
            taskText.classList.remove('text-decoration-line-through');
            announce("Task Marked as Incomplete");
        }

        updateStatistics();

    }
}

function enableTaskEdit(event) {
    if (!event.target.classList.contains("task-text")) {
        return;
    }

    event.target.contentEditable = true;
    event.target.focus();
}

function finishTaskEdit(event) {
    if (!event.target.classList.contains("task-text")) {
        return;
    }

    event.target.contentEditable = false;

    if (event.target.textContent.trim() === "") {
        event.target.textContent = "Untitled Task";
    }
}

function handleEditKey(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        event.target.blur();
    }
}

function handleSearch(event) {
    const search = event.target.value.toLowerCase();
    const tasks = document.getElementById("task-list").children;

    let visible = 0;

    for (const task of tasks) {
        const text = task.querySelector(".task-text").textContent.toLowerCase();

        if (text.includes(search)) {
            task.style.display = "";
            visible++;
        } else {
            task.style.display = "none";
        }
    }

    announce(`${visible} matching task${visible === 1 ? "" : "s"} found.`);
}

function showAllTasks() {
    const tasks = document.getElementById("task-list").children;

    for (const task of tasks) {
        task.style.display = "";
    }

    announce("Showing all tasks.");
}

function showActiveTasks() {
    const tasks = document.getElementById("task-list").children;

    for (const task of tasks) {
        const checkbox = task.querySelector('input[type="checkbox"]');

        task.style.display = checkbox.checked ? "none" : "";
    }

    announce("Showing active tasks.");
}

function showCompletedTasks() {
    const tasks = document.getElementById("task-list").children;

    for (const task of tasks) {
        const checkbox = task.querySelector('input[type="checkbox"]');

        task.style.display = checkbox.checked ? "" : "none";
    }

    announce("Showing completed tasks.");
}

function setupFormListener() {
    const form = document.getElementById('task-form');
    form.addEventListener('submit', handleAddTask);
}

function setupTaskListListener() {
    const taskList = document.getElementById('task-list');
    taskList.addEventListener('click', handleAddClick);
}

function setupEditListeners() {
    const taskList = document.getElementById('task-list');
    taskList.addEventListener('dblclick', enableTaskEdit);
    taskList.addEventListener('blur', finishTaskEdit, true);
    taskList.addEventListener('keydown', handleEditKey);
}

function setupSearchListener() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', handleSearch);
}

function setupFilterButtons() {
    const showAllButton = document.getElementById('show-all');
    const showActiveButton = document.getElementById('show-active');
    const showCompletedButton = document.getElementById('show-completed');
    showAllButton.addEventListener('click', showAllTasks);
    showActiveButton.addEventListener('click', showActiveTasks);
    showCompletedButton.addEventListener('click', showCompletedTasks);
}

function bootSystem() {
    setupFormListener();
    setupTaskListListener();
    setupEditListeners();
    setupSearchListener();
    setupFilterButtons();
    updateStatistics();
}

function announce(message) {
    document.getElementById("live-region").textContent = message;
}

document.addEventListener('DOMContentLoaded', bootSystem);