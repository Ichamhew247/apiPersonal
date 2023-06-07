module.exports = (Sequelize, DataTypes) => {
  const Order = Sequelize.define(
    "Order",
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      saleNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      term: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      poNumber: {
        type: DataTypes.STRING,
        allowNull: false,
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
  Order.associate = (models) => {
    Order.belongsTo(models.Customer, {
      foreignkey: {
        name: "customerId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    Order.hasMany(models.Delivery, {
      foreignkey: {
        name: "orderId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    Order.hasMany(models.OrderProduct, {
      foreignkey: {
        name: "orderId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };
  return Order;
};
