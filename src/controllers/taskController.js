const tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
];

const TaskController = {
  getAllTasks: (req, res) => {
    res.send(tasks);
  },
  addTask: (req, res) => {
    const taskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id: taskId, title: req.body.title, completed: false };
    tasks.push(newTask);
    res.status(201).send(newTask);
  },
  getTaskToComplete: (req, res, next) => {
    res.send(tasks.filter((task) => !task.completed));
  },
};

export default TaskController;
