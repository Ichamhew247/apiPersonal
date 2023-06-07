module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      customerName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      customerAddress: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      customerTaxNumber: {
        type: DataTypes.STRING,
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
  Customer.associate = (models) => {
    Customer.hasMany(models.Order, {
      foreignkey: {
        name: "customerId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Customer;
};
