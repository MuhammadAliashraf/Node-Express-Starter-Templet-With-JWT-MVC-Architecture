require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const auth = require("./middleware/authentication");
const authRouter = require("./routes/auth");
const jobRouter = require("./routes/jobs");
const ConnectDB = require("./config/connectme");

//NOTE: error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const limiter = require("express-rate-limit");

app.set("trust proxy", 1);

app.use(
  limiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  })
);
app.use(express.json());
// extra packages
app.use(helmet());
app.use(cors());
app.use(xss());

app.get("/", (req, res) => {
  res.send(
    "<h1>Starter Templet on Node & Express With Basic JWT Authentication </h1>"
  );
});

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", auth, jobRouter);

app.get("/", (req, res) => {
  res.send("jobs api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await ConnectDB(process.env.DB_URL);
    app.listen(port, () =>
      console.log(`Server is listening on Port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
