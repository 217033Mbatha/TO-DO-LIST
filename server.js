import express from 'express';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Listfile.html')); 
});


const todosFilePath = path.join(__dirname, 'public', 'Listfile.json'); 


app.get('/api/todos', async (req, res) => {
    try {
        const todos = await fs.readJson(todosFilePath);
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: "Error reading todos" });
    }
});


app.post('/api/todos', async (req, res) => {
    try {
        const todos = await fs.readJson(todosFilePath);
        const newTodo = { id: Date.now(), text: req.body.text, completed: false };
        todos.push(newTodo);
        await fs.writeJson(todosFilePath, todos);
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ message: "Error adding todo" });
    }
});


app.patch('/api/todos/:id', async (req, res) => {
    try {
        const todos = await fs.readJson(todosFilePath);
        const todo = todos.find(todo => todo.id === Number(req.params.id));
        if (todo) {
            todo.completed = req.body.completed;
            await fs.writeJson(todosFilePath, todos);
            res.json(todo);
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Error updating todo" });
    }
});


app.delete('/api/todos/:id', async (req, res) => {
    try {
        let todos = await fs.readJson(todosFilePath);
        todos = todos.filter(todo => todo.id !== Number(req.params.id));
        await fs.writeJson(todosFilePath, todos);
        res.json({ message: "Todo deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting todo" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
