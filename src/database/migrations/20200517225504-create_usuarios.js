
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('usuarios', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: Sequelize.STRING(100),
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    tipo: Sequelize.ENUM('PF', 'ONG'),
    descricao: Sequelize.STRING(255),
    telefone: Sequelize.STRING(10),
    facebook: Sequelize.STRING(40),
    instagram: Sequelize.STRING(40),
    twitter: Sequelize.STRING(40),
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('usuarios'),
};
