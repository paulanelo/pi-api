const {
  sequelize, Pet, Raca, User,
} = require('../models');

module.exports = {
  store: async (req, res) => {
    const pet = await Pet.create({
      ...req.body,
    })
      .then((u) => u)
      .catch((err) => res.status(503).send({ message: 'Não foi possível add no banco' }));
    return res.status(201).send(pet);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const pet = await Pet.findOne({
      where: {
        id,
      },
      include: [
        {
          model: User,
          as: 'usuario',
          include: 'endereco',
        },
        {
          model: Raca,
          as: 'raca',
          include: 'especie',
        },
        'fotos',
        'endereco',
      ],
    })
      .then((u) => u)
      .catch((err) => console.log('==>', err));
    return res.status(200).send(pet);
  },
};
