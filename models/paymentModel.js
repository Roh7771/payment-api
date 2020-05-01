const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'A payment must have a email']
  },
  name: {
    type: String,
    required: [true, 'A payment must have a name']
  },
  label: {
    type: String,
    required: [true, 'A payment must have a label']
  },
  paidStatus: {
    type: Boolean,
    required: [true, 'A payment must have a paid status']
  }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;