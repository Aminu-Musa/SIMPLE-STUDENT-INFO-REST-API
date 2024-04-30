const {
  getStudent,
  getStudents,
  register,deleteStudent,updateStudent
} = require("../Controllerrs/student.controller");

const router = require("express").Router();

router.post("/", register);
router.get("/", getStudents);
router.get("/:id", getStudent);
router.delete("/:id", deleteStudent);
router.patch("/:id", updateStudent);

module.exports = router;
