const Characters = (sequelize, DataTypes) => {
  const Character = sequelize.define(
    'characters',
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );
  return Character;
};

module.exports = Characters;
