require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("_middleware/error-handler");
const RateLimit = require("express-rate-limit");

const limiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
});

// apply rate limiter to all requests
app.use(limiter);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// api routes
app.use("/users", require("./users/users.controller"));

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
app.listen(port, () => console.log("Server listening on port " + port));
