const express = require('express');
const app = express();
app.use(express.json());


// Initializing Tasks array
let tasks = [{
  id : 1,
  title: 'Task 1',
  completed: false
}];

// To display all Tasks when sent GET req to /tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// To display unique Task by its id
app.get('/tasks/:id', (req, res) => {

  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (task) res.json(task);
  else res.status(404).send("Task not found.");

});

// To add a new task to the Tasks array
app.post('/tasks', (req, res) => {

  const {title, completed} = req.body;
  if (!title) return res.status(400).send('Title is required');

  const newTask = {
    id : tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1, title,
    completed: completed || false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);

});

// To update values of an existing task
app.put('/tasks/:id', (req, res) => {

  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).send("Task not found.");

  const {title, completed} = req.body;
  if (title) task.title = title;
  if (completed !== undefined) task.completed = completed;
  res.json(task);

});

// Delete an existing task
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).send("Task not found");

  tasks.splice(index, 1);
  res.status(204).send();
});

//Starts server on port 3001
app.listen(3001, () => {
  console.log("Server running on port 3001")
});

