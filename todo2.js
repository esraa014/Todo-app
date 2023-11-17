// Function to add a new task
function addTask() {
    // Get the input value
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task element
    var taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    // Add the task to the task list
    var taskList = document.getElementById('task-list');
    taskList.appendChild(taskElement);

    // Clear the input field
    taskInput.value = "";
    
taskElement.addEventListener('click', function() {
    markTaskAsDone(taskElement);
});

}

// Function to remove a task
function removeTask(button) {
    var taskToRemove = button.parentElement;
    taskToRemove.remove();
}




// Function to mark a task as done 
function markTaskAsDone(taskElement) {
    taskElement.classList.toggle('done');
}


// Function to remove all tasks
function removeAllTasks() {
var taskList = document.getElementById('task-list');
taskList.innerHTML = ""; // Remove all child elements
}

// Function to remove completed tasks
function removeCompletedTasks() {
var completedTasks = document.querySelectorAll('.done');

completedTasks.forEach(function(task) {
    task.remove();
});
}
// Function to mark all tasks as done
function markAllAsDone() {
    var tasks = document.querySelectorAll('.task');
    
    tasks.forEach(function(task) {
        if (!task.classList.contains('done')) {
            markTaskAsDone(task);
        }
    });
}