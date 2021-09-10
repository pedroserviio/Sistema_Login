import express from "express";
import UserController from "../controllers/user.controller";
import * as jwt from "../config/jwt";

const router = express.Router();

router.get("/login", async (req, res, next) => {
  const [, hash] = req.headers.authorization.split(" ");
  const [email, senha] = Buffer.from(hash, "base64").toString().split(":");

  try {
    const user = await new UserController().obter(email);
    console.log(user);

    if (!user) {
      throw new Error("Usuario ou senha inválidos");
    }

    const token = jwt.sign({ user: user.id });

    res.json({ user, token });
  } catch (error) {
    console.log("Erro no Login!");
    res.json(error.message);
  }
});

export default router;
