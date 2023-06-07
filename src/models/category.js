module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      nameCategory: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.ENUM("Admin", "User", "Guest"),
        allowNull: false,
        defaultValue: "Guest",
      },
    },
    {
      underscored: true,
    }
  );
  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      foreignkey: {
        name: "categoryId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };
  return Category;
};
