const express = require("express");
const cors = require("cors");
const paymentRouter = require("./routes/paymentRouter")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// 3) ROUTES
app.use("/api/v1/payment", paymentRouter);

module.exports = app;
