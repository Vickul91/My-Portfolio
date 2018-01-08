function addNewTask(title) {
    var taskLi = document.createElement('li');

    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareTaskHTML(title);

    // Events toogle and delete

    var toogleCompleteBtn = taskLi.querySelector('.toogle-complete-btn');
    var toogleDeleteBtn = taskLi.querySelector('.delete-task-btn');

    toogleCompleteBtn.addEventListener('click', function() {
        toogleTaskComplete(this);
    });

    toogleDeleteBtn.addEventListener('click', function() {
        deleteTask(this);
    });
    //Add task to DOM
    tasksContainer.appendChild(taskLi);

}

function prepareTaskHTML(title) {
   return '<div class="input-group">' +
            '<span class="input-group-btn">' +
                '<button class="btn btn-basic toogle-complete-btn"><i class="fa fa-check-circle-o" aria-hidden="true"></i></button>' +
            '</span>' +

            '<input type="text" class="form-control" placeholder="Zadanie..." value="'+ title + '">' +

            '<span class="input-group-btn">' +
                '<button class="btn btn-danger delete-task-btn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>' +
            '</span>' +
        '</div>';
}


// Add new task ebents 

function addTaskEvents() {

    // On submit
    newTaskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var title = this.querySelector('input').value;

        if(title) {
            addNewTask(title);
        }

    });
}