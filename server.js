const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
// const xss = require("xss-clean");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const sanitize = require("./utils/sanitize");

connectDB();

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(sanitize);
app.use(cookieParser());

app.use("/", authRoutes);

const PORT = 5000;
app.listen(PORT, ()=>{console.log(`Server is running on Port ${PORT}`)});