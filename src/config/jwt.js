import jwt from "jsonwebtoken";

const secret = "K9xfPv773dZR22TVUB80xouzdF7qCg5cWjPjkHyv7Ws";

export const sign = (payload) => jwt.sign(payload, secret, { expiresIn: '1d' });
export const verify = (token) => jwt.verify(token, secret);
