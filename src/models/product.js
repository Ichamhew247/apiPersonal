module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      productName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      underscored: true,
    }
  );
  // Product.belongsToMany(models.Order, {
  //   foreignkey: {
  //     name: "customerId",
  //     allowNull: false,
  //   },
  //   onDelete: "RESTRICT",
  //   onUpdate: "RESTRICT",
  // });
  return Product;
};
