const { User } = require("./src/models");
const { sequelize } = require("./src/models");
sequelize
  .sync({ force: true })
  .then(() => {
    return User.bulkCreate([
      {
        userName: "Nattanicha1",
        firstName: "Nattanicha",
        lastName: "Niyomchan1",
        email: "Nattanicha1@gmail.com",
        password: "ichamhew247",
      },
    ]);
  })

  .then(() => process.exit(0))
  .catch((err) => console.log(err.message));
