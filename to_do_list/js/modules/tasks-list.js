function showTasks() {
    tasks.forEach(function(title) {
        addNewTask(title);
    });
}

// Togle complete

function toogleTaskComplete(task) {
    task.classList.toggle('btn-success');
}

// Delete task

function deleteTask(task) {
    var liToDelete = task.closest('li');
    task.closest('ul').removeChild(liToDelete);
}