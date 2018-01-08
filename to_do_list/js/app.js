var tasksContainer = document.querySelector('.tasks-container ul');
var newTaskForm = document.querySelector('.new-task-container form');

//On DOM load
document.addEventListener('DOMContentLoaded', function() {
    addTaskEvents();
    showTasks();
});