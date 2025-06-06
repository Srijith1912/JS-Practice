let tasks = [];

document.getElementById('taskInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter'){
    addTask();
  }
}) 

function addTask(){

  let input = document.getElementById('taskInput');
  let taskText = input.value.trim();

  if(!taskText) return;

  tasks.push(taskText);
  input.value = '';
  renderTasks();
  

}

function renderTasks() {

  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  taskList.innerHTML = tasks.map((task, index) => {
    return `<li>${index + 1}. ${task} <button class="deleteButton" onclick="deleteTask(${index})">✕</button></li>\n`;
  }).join('');

}

function deleteTask(index){

  tasks.splice(index, 1);
  renderTasks();

}