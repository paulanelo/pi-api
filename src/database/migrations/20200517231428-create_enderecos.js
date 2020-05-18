
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('enderecos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    logradouro: Sequelize.STRING(100),
    numero: Sequelize.STRING(5),
    complemento: Sequelize.STRING(60),
    bairro: Sequelize.STRING(40),
    cidade: Sequelize.STRING(40),
    estado: Sequelize.STRING(2),
    usuario_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'usuario',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('enderecos'),
};
