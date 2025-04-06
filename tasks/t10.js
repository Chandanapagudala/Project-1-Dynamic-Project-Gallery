let taskStack = [];
function updateTaskList() {
const taskListContainer = document.getElementById('task-list');
taskListContainer.innerHTML = taskStack.join('<br>');
}
function addTask() {
const taskInput = document.getElementById('task-name');
const taskName = taskInput.value.trim();
if (taskName) {
taskStack.push(taskName);
updateTaskList();
taskInput.value = '';
} else {
alert('Please enter a task name.');
}
}
function undoTask() {
if (taskStack.length > 0) {
taskStack.pop();
updateTaskList();
} else {
alert('No tasks to undo.');
}
}
