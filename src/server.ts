import App from "./app.ts";

const PORT = process.env.PORT || 3000;
const server = new App(PORT);

server.listen();