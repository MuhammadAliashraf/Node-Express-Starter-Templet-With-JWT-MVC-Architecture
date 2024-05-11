const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company Name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide Position"],
      maxlength: 90,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
      maxlength: 10,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
