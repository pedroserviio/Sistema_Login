import { Schema } from "mongoose";

class UserSchema {
  constructor() {
    this.schema = new Schema(
      {
        id: { type: String, required: true },
        nome: { type: String, required: true },
        email: { type: String, required: true },
        senha: { type: String, required: true },
      },
      {
        timestamps: true,
        toJSON: { virtuals: true, getters: true },
        toObject: { virtuals: true, getters: true },
      }
    );
  }
}

export default new UserSchema().schema;
