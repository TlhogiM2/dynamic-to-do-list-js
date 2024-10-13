// Step 1: Set up an event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Step 2: Select DOM elements and store in constants
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Define the addTask function
    function addTask() {
        // Step 4: Get the value from the task input field and trim it
        const taskText = taskInput.value.trim();

        // Check if the taskText is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if the input is empty
        }

        // Create a new li element and set its textContent to taskText
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button and set its textContent to "Remove"
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Step 5: Add an event listener to the remove button to remove the li
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the remove button to the li
        li.appendChild(removeBtn);

        // Append the li to the task list
        taskList.appendChild(li);

        // Clear the task input field after adding the task
        taskInput.value = '';
    }

    // Step 6: Add an event listener to addButton to call addTask when clicked
    addButton.addEventListener('click', addTask);

    // Step 7: Add an event listener to taskInput for 'keypress' event (Enter key)
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
