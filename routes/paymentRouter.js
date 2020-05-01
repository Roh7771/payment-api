const express = require("express");
const paymentController = require(`../controllers/paymentController`);

const router = express.Router();

router.route(`/create`).post(paymentController.createPayment);

router.route("/check").post(paymentController.sendMail);

module.exports = router;
