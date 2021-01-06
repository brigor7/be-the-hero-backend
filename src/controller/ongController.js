const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(_, response) {
    try {
      const list = await connection('ongs').select('*');
      return response.json(list);
    } catch (error) {
      console.log('### ' + error);
    }
  },

  async create(request, response) {
    const { name, email, city, whatsapp, uf } = request.body;
    const id = crypto.randomBytes(4).toString('hex');
    try {
      await connection
        .insert({ id, name, email, city, whatsapp, uf })
        .into('ongs');

      return response.status(201).json({ id });
    } catch (error) {
      console.log('### ' + error);
    }
  },
};
