const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema(
  {
    pageHeader: {
      type: String,
    },
    pageBody: {
      type: String,
    },
    pageBody2: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    postalAddress: {
      type: String,
    },
    businessHours: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;
