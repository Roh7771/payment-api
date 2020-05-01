const Payment = require("../models/paymentModel");
const nodemailer = require("nodemailer");
const sendgrid = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgrid({
    auth: { api_key: process.env.SENDGRID_API_KEY },
  })
);

exports.createPayment = async (req, res) => {
  try {
    await Payment.create({ ...req.body, paidStatus: false });

    res.status(200).json({
      status: `success`,
    });
  } catch (err) {
    res.status(400).json({
      status: `failed`,
      message: err,
    });
  }
};

exports.sendMail = async (req, res) => {
  try {
    console.log(req.body);
    const label = req.body.label;

    const { email } = await Payment.findOneAndUpdate(
      { label },
      { paidStatus: true },
      { new: true }
    );

    res.status(200).json({
      status: `success`,
    });

    await transporter.sendMail({
      to: email,
      from: "belov.roh777@yandex.ru",
      subject: "Успешно куплено",
      html: "<h1>Спасибо за покупку!</h1>",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: `failed`,
      message: error,
    });
  }
};
