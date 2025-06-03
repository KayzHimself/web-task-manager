document.addEventListener('DOMContentLoaded', () => {
    // Get references to our HTML elements
    const newTaskInput = document.getElementById('new-task-input');
    const addMyTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Function to create a new task item in the DOM
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            // Toggle 'completed' class on click
            listItem.classList.toggle('completed');
        });

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('task-actions');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', () => {
            listItem.classList.toggle('completed'); // Also toggle via button
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem); // Remove task from the list
        });

        actionsDiv.appendChild(completeButton);
        actionsDiv.appendChild(deleteButton);

        listItem.appendChild(taskSpan);
        listItem.appendChild(actionsDiv);

        return listItem;
    }

    // Event listener for the "Add Task" button
    addMyTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim(); // Get input value and remove whitespace

        if (taskText !== '') { // Only add if input is not empty
            const newTaskElement = createTaskElement(taskText);
            taskList.appendChild(newTaskElement); // Add the new task to the list
            newTaskInput.value = ''; // Clear the input field
            newTaskInput.focus(); // Put focus back on the input
        } else {
            alert('Please enter a task!'); // Simple validation
        }
    });

    // Optional: Allow adding tasks by pressing Enter in the input field
    newTaskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addMyTaskButton.click(); // Simulate a click on the add button
        }
    });

    // You could add some initial tasks here for testing if you like:
    // taskList.appendChild(createTaskElement('Learn JavaScript'));
    // taskList.appendChild(createTaskElement('Build a Task Manager'));
    // taskList.appendChild(createTaskElement('Go to GitHub'));
});