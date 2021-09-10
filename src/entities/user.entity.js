import { v4 } from 'uuid';

export default class User {
    constructor(nome, email, senha, tipo) {
        this.id = v4();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}