import app from "./src/app";

const PORT = 3000;
const HOST = 'localhost';
const URL = `http://${HOST}:${PORT}`;

const server = app.listen(PORT, HOST, () => {
    console.log(`Server: ${URL} is running`);
})