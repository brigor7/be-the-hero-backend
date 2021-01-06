const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    try {
      const list = await connection('incidents').select('*');
      response.json(list);
    } catch (error) {}
    console.error('###Error Incident index' + error);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    try {
      await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
      });
    } catch (error) {
      console.error('###Error Incident create' + error);
    }

    response.json({ status: ong_id });
  },

  async delete(request, response) {
    const { id } = request.params;
    try {
      await connection('incidents').delete().where({ id });
      return response.status(204).send();
    } catch (error) {}
  },
};
