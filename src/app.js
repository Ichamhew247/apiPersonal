require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const userRoute = require("./routes/userRoute");
// const todoRoute = require("./routes/todoRoute");
const notFoundMiddleware = require("./middleware/notFound");
const errorMiddleware = require("./middleware/error");
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/users", userRoute);
// app.use("/todo", todoRoute);
// const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");

//MIDDLEWARE

// app.use(
//   rateLimit({
//     windowMs: 1000 * 60 * 1,
//     max: 1000,
//     message: { message: "too many requests" },
//   })
// );

// app.use(helmet());

const port = process.env.PORT || 8000;

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => console.log("server running on port " + port));
