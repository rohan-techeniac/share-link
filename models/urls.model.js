const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let urlSchema = new Schema(
  {
    last_follow_up: {
      type: String,
      trim: true,
    },
    next_follow_up: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    position: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    industry: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    linkedin_url: {
      type: String,
      required: true,
      trim: true,
    },
    company_website_url: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    collection: "urls",
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
      },
    },
  }
);
module.exports = mongoose.model("UrlSchema", urlSchema);
