import User from "../entities/user.entity";
import UserSchema from "../models/user.schema";
import mongoDatabase from "../utils/database/database";
import { Validador } from "../utils/utils";

class UserRepository {
  inserir(user = new User()) {
    user.senha = Validador.criptografarSenha(user.senha);

    mongoDatabase.inserir(user, UserSchema, "usuario");
  }

  listar() {
    return mongoDatabase.listar(UserSchema, "usuario");
  }

  excluir(id) {
    return mongoDatabase.excluir(id, UserSchema, "usuario");
  }

  obterPorID(id) {
    return mongoDatabase.obterPorID(id, UserSchema, "usuario");
  }

  obter(email) {
    return mongoDatabase.obter(email, UserSchema, "usuario");
  }

}

export default new UserRepository();
