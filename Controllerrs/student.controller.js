const StudentModel = require("../Models/student.model");

// CREATE
const register = async (req, res) => {
  try {
    const registerStudent = await StudentModel.create(req.body);
    res
      .status(200)
      .json({ status: 200, statusText: "successful", data: registerStudent });
  } catch (err) {
    res.status(500).json({
      status: 500,
      statusText: "An error occured",
      msg: err.message,
    });
  }
};

// READ GET ALL
const getStudents = async (req, res) => {
  try {
    const students = await StudentModel.find();
    res
      .status(200)
      .json({ status: 200, statusText: "successful", data: students });
  } catch (err) {
    res.status(500).json({
      status: 500,
      statusText: "An error occured",
      msg: err.message,
    });
  }
};

// READ GET ONE
const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await StudentModel.findById(id);

    if (!student) {
      return res.status(404).json({
        status: 404,
        msg: `No student with id: ${id} was found on the database`,
      });
    } else {
      res
        .status(200)
        .json({ status: 200, statusText: "successful", data: student });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      statusText: "An error occured",
      msg: err.message,
    });
  }
};

// UPDATE  (PUT)
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecord = await StudentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedRecord) {
      return res.status(404).json({
        status: 404,
        msg: `No student with id: ${id} was found on the database`,
      });
    }
    res.status(200).json({
      status: 200,
      statusText: "update was successful",
      data: updatedRecord,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      statusText: "An error occured",
      msg: err.message,
    });
  }
};

// UPDATE  (PATCH)

// DELETE
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStudent = await StudentModel.findByIdAndDelete(id);

    if (!deleteStudent) {
      return res.status(404).json({
        status: 404,
        msg: `No student with id: ${id} was found on the database`,
      });
    }

    res.status(200).json({
      status: 200,
      statusText: `student with id:${id} has been deleted`,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      statusText: "An error occured",
      msg: err.message,
    });
  }
};

module.exports = {
  register,
  getStudents,
  getStudent,
  deleteStudent,
  updateStudent,
};
