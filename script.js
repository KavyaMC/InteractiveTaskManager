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

    function setupFormListener() { }
    function handleTaskClick(event) { }
    function setupTaskListListener() { }
    function EnableTaskEdit(event) { }
    function finishTaskEdit(event) { }
    function handleEditKey(event) { }
    function setupEditListeners() { }
    function handleSearch(event) { }
    function setupSearchListener() { }
    function showAllTasks() { }
    function showActiveTasks() { }
    function showCompletedTasks() { }
    function setupFilterListeners() { }
    function bootSystem() { }
    document.addEventListener('DOMContentLoaded', bootSystem);