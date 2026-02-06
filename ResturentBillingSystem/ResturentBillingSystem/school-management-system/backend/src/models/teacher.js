export default (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    'Teacher',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'teachers',
      timestamps: true,
    }
  );

  return Teacher;
};
