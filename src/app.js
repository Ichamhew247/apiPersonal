require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user-route");
const { sequelize } = require("./models");
// const morgan = require("morgan");
// const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");
// const notFoundMiddleware = require("./middleware/not-found");
// const errorMiddleware = require("./middleware/error");

sequelize.sync({ force: true });
const app = express();

app.use(cors());

// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

// app.use(
//   rateLimit({
//     windowMs: 1000 * 60 * 1,
//     max: 1000,
//     message: { message: "too many requests" },
//   })
// );

// app.use(helmet());
app.use(express.json());

// app.use(notFoundMiddleware);
// app.use(errorMiddleware);
app.use("/user", userRoute);
const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server running on port " + port));
