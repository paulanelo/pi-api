module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    'Pet',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataTypes.STRING(100),
      porte: {
        type: DataTypes.ENUM('PEQUENO', 'MEDIO', 'GRANDE'),
        allowNull: false,
      },
      sexo: {
        type: DataTypes.ENUM('MACHO', 'FEMEA', 'DESCONHECIDO'),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('PERDIDO', 'ENCONTRADO', 'ADOCAO'),
        allowNull: false,
      },
      descricao: DataTypes.STRING(255),
      vacinado: DataTypes.STRING(10),
      castrado: DataTypes.STRING(40),
      vermifugado: DataTypes.STRING(40),
      cuidados_extras: DataTypes.STRING(100),
      fk_raca: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      fk_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      fk_foto_principal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
    },
    {
      tableName: 'pets',
      timestamps: false,
    },
  );

  return pet;
};
