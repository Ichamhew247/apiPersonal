module.exports = (Sequelize, DataTypes) => {
  const Order = Sequelize.define("Order", {
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Order;
};
