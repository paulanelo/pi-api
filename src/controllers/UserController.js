require('dotenv').config();
const bcrypt = require('bcrypt');
const { sequelize, User } = require('../models');

const errorMessage = require('../helpers/errorMessage');

module.exports = {
  store: async (req, res) => {
    const { senha, email } = req.body;
    const checkUser = await User.findOne({
      where: { email },
    });
    if (checkUser) return res.status(200).send(errorMessage(200, 'Usuário já cadastrado'));

    const { id, nome, image } = await User.create({
      email,
      senha: bcrypt.hashSync(senha, Number(process.env.BC_SALT)),
    })
      .then((user) => user)
      .catch((err) => res.status(503).send(errorMessage(503, 'Serviço não disponível')));

    return res.status(201).send({
      id,
      nome,
      image,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const user = await User.update({ ...req.body }, { where: { id } });

    return res.send(user);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
      },
    });
    console.log(user);
    return res.send(user);
  },
  index: async (req, res) => {
    const users = await User.findAll();
    return res.send(users);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const checkUser = await User.findOne({
      where: { id },
    });
    console.log(checkUser);
    if (!checkUser) return res.status(404).send({ message: 'Usuário não encontrado' });

    const user = await User.destroy({
      where: {
        id,
      },
    })
      .then((u) => u)
      .catch((err) => res.status(503).send(errorMessage(503, 'Serviço não disponível')));
    return res.status(200).send({ message: 'Usuário deletado com sucesso' });
  },
};
