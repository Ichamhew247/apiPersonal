module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      priceProduct: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // photoProduct: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
    },
    {
      underscored: true,
    }
  );
  Product.associate = (models) => {
    Product.hasMany(models.OrderProduct, {
      foreignkey: {
        name: "productId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    Product.belongsTo(models.Category, {
      foreignkey: {
        name: "categoryId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };
  return Product;
};
