const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Firstname cannot be left blank"],
    },
    lastname: {
      type: String,
      required: [true, "Lastname cannot be left blank"],
    },
    othernames: {
      type: String,
    },
    dob: {
      type: String,
      required: [true, "Date of birth cannot be left blank"],
    },
    gender: {
      type: String,
      required: [true, "Gender cannot be left blank"],
    },
    address: {
      type: String,
      required: [true, "Address cannot be left blank"],
    },
    class: {
      type: String,
      required: [true, "class cannot be left blank"],
    },
    addNo: {
      type: String,
    },
  },
  { timestamps: true }
);

const StudentModel = mongoose.model("record", studentSchema);

module.exports = StudentModel;
