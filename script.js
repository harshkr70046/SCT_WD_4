const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskDate = document.getElementById("task-date");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value;
  const taskTime = taskDate.value;

  if (taskText && taskTime) {
    const li = document.createElement("li");

    const taskContent = document.createElement("span");
    taskContent.innerHTML = `${taskText} <small>(${taskTime})</small>`;

    const actions = document.createElement("div");
    actions.className = "actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = () => {
      li.classList.toggle("completed");
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.onclick = () => {
      const newText = prompt("Edit task:", taskText);
      if (newText) {
        taskContent.innerHTML = `${newText} <small>(${taskTime})</small>`;
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.onclick = () => {
      li.remove();
    };

    actions.append(completeBtn, editBtn, deleteBtn);
    li.append(taskContent, actions);
    taskList.appendChild(li);

    // Clear form
    taskInput.value = "";
    taskDate.value = "";
  }
});
