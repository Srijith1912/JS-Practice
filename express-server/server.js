const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

const uri = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const client = new MongoClient(uri);

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Access denied");

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = user;
    next();
  });
};

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    const db = client.db("taskDB");
    const tasksCollection = db.collection("tasks");
    const usersCollection = db.collection("users");

    app.post("/register", async (req, res) => {
      const { username, password } = req.body;

      if (!username || !password)
        return res.status(400).send("Username and password required");

      const existingUser = await usersCollection.findOne({ username });
      if (existingUser) return res.status(400).send("Username already exists");

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = { username, password: hashedPassword };
      await usersCollection.insertOne(user);
      res.status(201).send("User registered");
    });

    app.post("/login", async (req, res) => {
      const { username, password } = req.body;

      const user = await usersCollection.findOne({ username });
      if (!user) return res.status(401).send("Invalid credentials");

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return res.status(401).send("Invalid credentials");

      const token = jwt.sign({ username: user.username }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    });

    // GET all tasks
    app.get("/tasks", authenticateToken, async (req, res) => {
      const tasks = await tasksCollection
        .find({ userId: req.user.username })
        .toArray();
      res.json(tasks);
    });

    // GET a specific task
    app.get("/tasks/:id", authenticateToken, async (req, res) => {
      const task = await tasksCollection.findOne({
        id: parseInt(req.params.id),
        userId: req.user.username,
      });

      if (task) res.json(task);
      else res.status(404).send("Task not found");
    });

    // POST a new task
    app.post("/tasks", authenticateToken, async (req, res) => {
      const { title, completed } = req.body;
      if (!title) return res.status(400).send("Title is required");

      const newTask = {
        id: (await tasksCollection.countDocuments()) + 1,
        title,
        completed: completed || false,
        userId: req.user.username,
      };
      await tasksCollection.insertOne(newTask);
      res.status(201).json(newTask);
    });

    // PUT (update) a task
    app.put("/tasks/:id", authenticateToken, async (req, res) => {
      const id = parseInt(req.params.id);
      const { title, completed } = req.body;

      const updateDoc = {};
      if (title) updateDoc.title = title;
      if (completed !== undefined) updateDoc.completed = completed;

      const result = await tasksCollection.updateOne(
        { id, userId: req.user.username },
        { $set: updateDoc }
      );

      if (result.matchedCount === 0)
        return res.status(404).send("Task not found");
      const updatedTask = await tasksCollection.findOne({
        id,
        userId: req.user.username,
      });
      res.json(updatedTask);
    });

    // DELETE a task
    app.delete("/tasks/:id", authenticateToken, async (req, res) => {
      const result = await tasksCollection.deleteOne({
        id: parseInt(req.params.id),
        userId: req.user.username,
      });
      if (result.deletedCount === 0)
        return res.status(404).send("Task not found");
      res.status(204).send();
    });

    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);
