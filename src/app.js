import express from "express";
import cors from "cors";
import MongoDatabase from "./utils/database/database";
import UserRoute from "./routes/user.route";
import LoginRoute from "./routes/login.route";

class App {
  constructor() {
    this.app = express();
    this.database();
    this.initMiddleware();
    this.rotas();
    this.endMiddleware();
  }

  initMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  rotas() {
    this.app.use("/pscelsio", UserRoute);
    this.app.use("/pscelsio", LoginRoute);
  }

  endMiddleware() {
    this.app.use((error, req, res, next) => {
      if (error) {
        res.status(400).json({
          mensagem: error.message,
          status: 400,
        });
      }
    });
  }

  database() {
    MongoDatabase.connect()
      .then((r) => {
        console.log("Database conectado!");
      })
      .catch(() => {
        console.log("Falha na conexão com banco de dados!");
      });
  }
}

export default new App().app;
