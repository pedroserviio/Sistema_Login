import mongoose from "mongoose";

class MongoDatabase {
  async connect() {
    await mongoose.connect("mongodb://localhost:27017/projeto-curso", {
      useUnifiedTopology: true,
    });
  }

  async inserir(dado, schema, collection) {
    const model = mongoose.model(collection, schema);
    const session = await model.startSession();
    await model.create([dado], { session });
    session.endSession();
  }

  async listar(schema, collection) {
    const model = mongoose.model(collection, schema);
    return model.find();
  }

  async excluir(id, schema, collection) {
    const model = mongoose.model(collection, schema);
    return await model.deleteOne({ id: id });
  }

  async obterPorID(id, schema, collection) {
    const model = mongoose.model(collection, schema);
    return await model.findOne({ id: id });
  }

  async obter(email, schema, collection) {
    const model = mongoose.model(collection, schema);

    return await model.findOne({ email: email });
  }

}

export default new MongoDatabase();
