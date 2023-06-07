module.exports = (Sequelize, DataTypes) => {
  const OrderProduct = Sequelize.define(
    "OrderProduct",
    {
      priceOrder: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vat: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      netTotal: {
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
  OrderProduct.associate = (models) => {
    OrderProduct.belongsTo(models.Order, {
      foreignkey: {
        name: "orderId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    OrderProduct.belongsTo(models.Product, {
      foreignkey: {
        name: "productId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };
  return OrderProduct;
};
