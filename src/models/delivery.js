module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define(
    "Delivery",
    {
      deliveryDate: {
        type: DataTypes.DATEONLY,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.ENUM("Admin", "User"),
        allowNull: false,
        defaultValue: "Admin",
      },
    },
    {
      underscored: true,
    }
  );
  Delivery.associate = (models) => {
    Delivery.belongsTo(models.Order, {
      foreignkey: {
        name: "orderId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };
  return Delivery;
};
