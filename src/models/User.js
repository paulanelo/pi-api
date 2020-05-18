module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataTypes.STRING(100),
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      tipo: DataTypes.ENUM('PF', 'ONG'),
      descricao: DataTypes.STRING(255),
      telefone: DataTypes.STRING(10),
      facebook: DataTypes.STRING(40),
      instagram: DataTypes.STRING(40),
      twitter: DataTypes.STRING(40),
    },
    {
      tableName: 'usuarios',
      timestamps: false,
    },
  );

  return user;
};
