/*Lester*/
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const newTaskBtn = document.getElementById('new-task-btn');
    const removeBtn = document.getElementById('remove-btn');
    const completeBtn = document.getElementById('complete-btn');
  
    addTaskBtn.addEventListener('click', function() {
      const taskValue = taskInput.value.trim();
      if (taskValue) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
          <span>${taskValue}</span>
          <button class="remove-btn" onclick="removeTask(this)">Remove</button>
          <button class="complete-btn" onclick="completeTask(this)">Complete</button>
        `;
        taskList.insertBefore(li, taskList.firstChild); // Insert new task before the first child
        taskInput.value = ''; // Clear the input after adding
      }
    });
  
    newTaskBtn.addEventListener('click', function() {
      taskInput.value = ''; // Clear the input for a new task
      taskInput.focus(); // Focus the input field
    });
  
    removeBtn.addEventListener('click', function() {
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
    });
  
    completeBtn.addEventListener('click', function() {
      const tasks = taskList.querySelectorAll('.task-item');
      tasks.forEach(task => {
        task.querySelector('span').classList.add('completed');
      });
    });
  
    // Function to remove a task
    function removeTask(button) {
      const taskItem = button.parentElement;
      taskItem.remove();
    }
  
    // Function to complete a task
    function completeTask(button) {
      const taskItem = button.parentElement;
      taskItem.querySelector('span').classList.add('completed');
    }
  });