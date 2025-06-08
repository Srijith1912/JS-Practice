const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

app.use(express.json());

const uri = 'mongodb+srv://mulupurisrijith:UYrNZlautfTcZ28J@cluster0.pcisnry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

async function run() {
  try {

    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const db = client.db('taskDB');
    const collection = db.collection('tasks');

    // GET all tasks
    app.get('/tasks', async (req, res) => {

      const tasks = await collection.find().toArray();
      res.json(tasks);

    });

    // GET a specific task
    app.get('/tasks/:id', async (req, res) => {

      const task = await collection.findOne({ id: parseInt(req.params.id) });

      if (task) res.json(task);
      else res.status(404).send('Task not found');

    });

    // POST a new task
    app.post('/tasks', async (req, res) => {

      const { title, completed } = req.body;
      if (!title) return res.status(400).send('Title is required');

      const newTask = { id: (await collection.countDocuments()) + 1, title, completed: completed || false };
      await collection.insertOne(newTask);
      res.status(201).json(newTask);
    });

    // PUT (update) a task
    app.put('/tasks/:id', async (req, res) => {

      const id = parseInt(req.params.id);
      const { title, completed } = req.body;

      const updateDoc = {};
      if (title) updateDoc.title = title;
      if (completed !== undefined) updateDoc.completed = completed;

      const result = await collection.updateOne({ id }, { $set: updateDoc });

      if (result.matchedCount === 0) return res.status(404).send('Task not found');
      const updatedTask = await collection.findOne({ id });
      res.json(updatedTask);
    });

    // DELETE a task
    app.delete('/tasks/:id', async (req, res) => {

      const result = await collection.deleteOne({ id: parseInt(req.params.id) });
      if (result.deletedCount === 0) return res.status(404).send('Task not found');
      res.status(204).send();

    });

    app.listen(3001, () => {
      console.log('Server running on port 3001');
    });
    
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);
