import express from "express";
import UserController from "../controllers/user.controller";
import * as jwt from "../config/jwt";
import { authMiddleware } from "../utils/auth.middleware";

const router = express.Router();

router.get("/users", authMiddleware, async (req, res, next) => {
  try {
    const listaUsers = await new UserController().listar();
    res.json(listaUsers);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/users/:id", async (req, res, next) => {
  const obterId = await new UserController().obterPorID(req.params.id);

  console.log(obterId);
  res.json(obterId);
});

router.post("/users", async (req, res, next) => {
  try {
    const response = await new UserController().inserir(req.body);

    const token = jwt.sign({ user: response.id });

    res.json({ response, token });
  } catch (error) {
    console.log("Erro ao inserir usuario");
    next(error);
  }
});

router.delete("/users/:id", (req, res, next) => {
  new UserController()
    .excluir(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.log("Erro ao excluir usuario");
      next(error);
    });
});

router.get("/me", authMiddleware, async (req, res, next) => {
  res.json(req.auth);
});

export default router;
