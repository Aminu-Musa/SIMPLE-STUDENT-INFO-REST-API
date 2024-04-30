const express = require("express");
const connectDB = require("./Config/ConnectDB");
const router = require("./Routes/student.route");
const dotenv = require("dotenv").config();
const helmet = require("helmet")

const app = express();


// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())


// ROUTES
app.use("/api/students", router)


const PORT = process.env.PORT || 5000;
const runServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server running on: http://localhost:${PORT}`);
    });
  } catch (error) {}
};

runServer();
