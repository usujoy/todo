import express from "express";

class App {
  public app: express.Application;
  public port: number | string;

  constructor(port: number | string) {
    this.app = express();
    this.port = port;

    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.app.get("/", (req, res) => {
      res.send("App is running");
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

export default App;
