// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Task input field
    const taskList = document.getElementById('task-list');     // Unordered list for tasks

    // Step 2: Create the addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the input value

        // Step 3: Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task!'); // Alert if no task is entered
            return; // Exit the function if the input is empty
        }

        // Step 4: Create a new task (li) and a remove button
        const li = document.createElement('li'); // Create a new list item
        li.textContent = taskText; // Set the task text

        const removeBtn = document.createElement('button'); // Create the remove button
        removeBtn.textContent = 'Remove'; // Set button text
        removeBtn.classList.add('remove-btn'); // Add class for styling

        // Step 5: Attach the remove functionality to the button
        removeBtn.onclick = function() {
            taskList.removeChild(li); // Remove the task when the button is clicked
        };

        li.appendChild(removeBtn); // Add the remove button to the list item
        taskList.appendChild(li);  // Add the new task to the list

        taskInput.value = ''; // Clear the input field after adding the task
    }

    // Step 6: Attach event listeners to the button and input field
    addButton.addEventListener('click', addTask); // Call addTask when "Add Task" button is clicked

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // Check if the pressed key is "Enter"
            addTask(); // Call addTask on pressing "Enter"
        }
    });
});

