module.exports = (Sequelize, DataTypes) => {
  const Order = Sequelize.define(
    "Order",
    {
      orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
    },
    {
      underscored: true,
    }
  );
  // Order.belongsToMany(models.Product, {
  //   foreignkey: {
  //     name: "productId",
  //     allowNull: false,
  //   },
  //   onDelete: "RESTRICT",
  //   onUpdate: "RESTRICT",
  // });

  return Order;
};
