import User from "../entities/user.entity";
import UserRepository from "../repositories/user.repository";
import { Validador } from "../utils/utils";

export default class UserController {
  async inserir(user) {
    const { nome, email, senha } = user;

    Validador.validarParametros([{ nome }, { email }, { senha }]);

    const users = new User(nome, email, senha);

    UserRepository.inserir(users);
    const mensagem = "Usuario registrado!";

    return { mensagem, id: user.id };
  }

  async listar() {
    return UserRepository.listar();
  }

  async excluir(id) {
    UserRepository.excluir(id);
    const mensagem = "Usuario deletado!";
    return { mensagem, id: id };
  }

  async obterPorID(id) {
    return UserRepository.obterPorID(id);
  }

  async obter(email) {
    return UserRepository.obter(email);
  }

}
