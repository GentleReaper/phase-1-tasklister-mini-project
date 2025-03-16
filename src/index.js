document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const taskDescription = document.getElementById('new-task-description').value;

      if (taskDescription.trim() !== "") {
          const li = document.createElement('li');
          li.textContent = taskDescription;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', function() {
              li.remove();
          });
          taskList.appendChild(li);
          document.getElementById('new-task-description').value = '';
      }
  });
});
