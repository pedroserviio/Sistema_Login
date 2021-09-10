import UserController from "../controllers/user.controller";
import * as jwt from "../config/jwt";

export const authMiddleware = async (req, res, next) => {
  const [, token] = req.headers.authorization.split(" ");

  try {
    const payload = await jwt.verify(token);
    const user = await new UserController().obterPorID(payload.user)
    console.log(user)

    if (!user) {
      throw new Error("Token nao informado!");
    }

    req.auth = user;

    next();
  } catch (error) {
    res.json(error.message);
  }
};
