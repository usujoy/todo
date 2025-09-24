import express from "express";
import TaskController from "./controllers/taskController.js";
import middlewares from "./middlewares/middlewares.js";
class App {
  public app: express.Application;
  public port: number | string;

  constructor(port: number | string) {
    this.app = express();
    this.port = port;

    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.app.use(middlewares.requestLogger);
    this.app.get("/task", TaskController.getAllTasks);
    this.app.post("/task", express.json(), TaskController.addTask);
    this.app.get("/task/toComplete", TaskController.getTaskToComplete);
    this.app.put("/task/:id", express.json(), TaskController.updateTaskTitle);
    this.app.put(
      "/task/:id/completed",
      express.json(),
      TaskController.markAsDone
    );
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

export default App;
