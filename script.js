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
        document.getElementById('total-tasks').textContent = totalTasks;
        document.getElementById('active-tasks').textContent = activeTasks;
        document.getElementById('completed-tasks').textContent = totalTasks - activeTasks;
    }

    function createTaskItem(text) { }
    function handleAddTask(event) { }
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