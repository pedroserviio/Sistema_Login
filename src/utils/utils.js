import bcrypt from "bcryptjs";

export const Validador = {
  validarParametros: (parametros) => {
    if (!parametros) return true;

    const parametrosInvalidos = parametros
      .filter((p) => {
        const attr = Object.keys(p)[0];
        return (
          p[attr] === null ||
          p[attr] === undefined ||
          (typeof p[attr] === "number" && isNaN(p[attr])) ||
          (typeof p[attr] === "string" && p[attr] === "")
        );
      })
      .map((p) => Object.keys(p)[0]);

    if (parametrosInvalidos.length) {
      throw new Error(
        `Os seguintes parametros são obrigatórios: ${parametrosInvalidos.join(
          ", "
        )}`
      );
    }
    return true;
  },

  validarSenha: (senha, senhaAtual) => {
    const isValid = bcrypt.compareSync(senha, senhaAtual);

    if (!isValid) {
      throw new Error("Usuário ou senha inválida.");
    }
  },

  criptografarSenha: (senha) => {
    return bcrypt.hashSync(senha, 8);
  },
};
