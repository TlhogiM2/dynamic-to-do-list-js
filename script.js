// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Task input field
    const taskList = document.getElementById('task-list');     // Unordered list for tasks

    // Step 1: Load tasks from Local Storage when the page loads
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks from Local Storage or initialize to empty array
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add each stored task to the DOM without saving again to Local Storage
    }

    // Step 2: Create the addTask function with Local Storage saving
    function addTask(taskText, save = true) {
        // Task creation logic remains the same
        const li = document.createElement('li'); // Create new list item
        li.textContent = taskText;

        const removeBtn = document.createElement('button'); // Create remove button
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = function() {
            taskList.removeChild(li); // Remove the task from the DOM
            removeTaskFromStorage(taskText); // Remove the task from Local Storage
        };

        li.appendChild(removeBtn); // Add the remove button to the list item
        taskList.appendChild(li);  // Add the list item to the task list

        taskInput.value = ''; // Clear the input field

        // Step 3: Save task to Local Storage
        if (save) {
            saveTaskToStorage(taskText);
        }
    }

    // Function to save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks array from Local Storage
        storedTasks.push(taskText); // Add new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated array back to Local Storage
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks array from Local Storage
        storedTasks = storedTasks.filter(task => task !== taskText); // Remove the specified task from the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated array back to Local Storage
    }

    // Step 4: Attach event listeners for adding tasks
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim(); // Get the trimmed input value
        if (taskText === '') {
            alert('Please enter a task!'); // Alert if the input is empty
        } else {
            addTask(taskText); // Add task to the list and Local Storage
        }
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // If the Enter key is pressed
            const taskText = taskInput.value.trim();
            if (taskText === '') {
                alert('Please enter a task!');
            } else {
                addTask(taskText); // Add task to the list and Local Storage
            }
        }
    });
});
