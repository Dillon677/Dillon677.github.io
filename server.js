const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 内存数据存储
let todos = [];
let nextId = 1;

// 获取所有待办事项
app.get("/todos", (req, res) => {
res.json(todos);
});

// 添加待办事项
app.post("/todos", (req, res) => {
const { title } = req.body;

if (!title || !title.trim()) {
return res.status(400).json({ error: "title 不能为空" });
}

const todo = { id: nextId++, title: title.trim(), done: false };
todos.push(todo);
res.status(201).json(todo);
});

// 删除待办事项
app.delete("/todos/:id", (req, res) => {
const id = Number(req.params.id);
const index = todos.findIndex((t) => t.id === id);

if (index === -1) {
return res.status(404).json({ error: "未找到该待办事项"});
}

const deleted = todos.splice(index, 1)[0];
res.json(deleted);
});

// 启动服务器
app.listen(PORT, () => {
console.log(`✅ 服务已启动: http://localhost:${PORT}`);
});